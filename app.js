(function () {
  "use strict";

  var TZ = "America/Porto_Velho";
  var FARMACIAS = window.FARMACIAS || {};
  var ESCALA = window.ESCALA || {};
  var DAY = 86400000;

  var $ = function (id) { return document.getElementById(id); };
  var pad = function (n) { return String(n).padStart(2, "0"); };

  // Hora de Jaru, independente do fuso do aparelho.
  // ?agora=2026-10-06T02:30 simula um horário (útil para conferir a escala).
  function jaruNow() {
    var forced = new URLSearchParams(location.search).get("agora");
    var m = forced && forced.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);
    if (m) return { y: +m[1], mo: +m[2], d: +m[3], h: +m[4], mi: +m[5] };

    var parts = {};
    new Intl.DateTimeFormat("en-CA", {
      timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    }).formatToParts(new Date()).forEach(function (p) { parts[p.type] = p.value; });
    return { y: +parts.year, mo: +parts.month, d: +parts.day, h: +parts.hour % 24, mi: +parts.minute };
  }

  // Datas de calendário como meia-noite UTC, só para contar dias.
  function cal(y, mo, d) { return new Date(Date.UTC(y, mo - 1, d)); }
  function addDays(date, n) { return new Date(date.getTime() + n * DAY); }
  function monthKey(date) { return date.getUTCFullYear() + "-" + pad(date.getUTCMonth() + 1); }
  function ddmm(date) { return pad(date.getUTCDate()) + "/" + pad(date.getUTCMonth() + 1); }

  function dutyOn(date) {
    var list = ESCALA[monthKey(date)];
    var key = list && list[date.getUTCDate() - 1];
    return key && FARMACIAS[key] ? FARMACIAS[key] : null;
  }

  var fmtWeekday = new Intl.DateTimeFormat("pt-BR", { weekday: "short", timeZone: "UTC" });
  var fmtMonth = new Intl.DateTimeFormat("pt-BR", { month: "long", timeZone: "UTC" });
  function weekday(date) { return fmtWeekday.format(date).replace(".", ""); }

  function splitName(nome) {
    var m = nome.match(/^(Farmácia|Drogaria|Pharmacia)\s+(.+)$/);
    return m ? { pre: m[1], main: m[2] } : { pre: "", main: nome };
  }

  function mapsUrl(f) {
    return "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(f.endereco + ", " + f.setor + ", Jaru - RO");
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function norm(s) {
    return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }

  // ---------- Estado do plantão ----------

  // O plantão da data D vai das 22:00 de D às 07:00 de D+1.
  function resolve(now) {
    var today = cal(now.y, now.mo, now.d);
    var night, state;
    if (now.h < 7) { night = addDays(today, -1); state = "open"; }
    else if (now.h >= 22) { night = today; state = "open"; }
    else { night = today; state = "tonight"; }
    var farmacia = dutyOn(night);
    if (!farmacia) state = HAS_DATA ? "unknown" : "nodata";
    return { today: today, night: night, state: state, farmacia: farmacia };
  }

  var lastKey = null;
  var activeMonth = null;

  var HAS_DATA = Object.keys(ESCALA).length > 0 && Object.keys(FARMACIAS).length > 0;

  function renderBox(r, now) {
    var box = $("box");
    var night = now.h >= 18 || now.h < 7;
    box.dataset.state = r.state;
    document.documentElement.dataset.theme = night ? "night" : "day";
    document.querySelector('meta[name="theme-color"]').content = night ? "#0f0f0e" : "#e6e3dc";

    var label = $("state-label"), until = $("state-until");
    var nameEl = $("name"), addr = $("addr"), strength = $("strength"), lot = $("lot");
    var maps = $("maps"), wa = $("wa"), fine = $("fine");

    if (r.state === "unknown" || r.state === "nodata") {
      var nodata = r.state === "nodata";
      label.textContent = nodata ? "Escala indisponível" : "Escala não publicada";
      until.textContent = nodata ? "" : "noite de " + ddmm(r.night);
      nameEl.innerHTML = '<span class="name-main">' +
        (nodata ? "Não foi possível carregar a escala" : "Sem escala para esta data") + "</span>";
      addr.textContent = nodata
        ? "Verifique sua conexão e recarregue a página, ou consulte a escala oficial."
        : "A escala carregada neste site vai até dezembro de 2026.";
      strength.hidden = true;
      lot.hidden = true;
      maps.href = "https://jaru.ro.gov.br";
      $("maps-label").textContent = "Ver site da Prefeitura";
      wa.hidden = true;
      fine.textContent = nodata
        ? "Escala oficial publicada pela Prefeitura de Jaru, elaborada pela ACIJ."
        : "Assim que a ACIJ publicar a nova escala, ela será adicionada aqui.";
      return;
    }

    var f = r.farmacia;
    var n = splitName(f.nome);
    var end = addDays(r.night, 1);

    if (r.state === "open") {
      label.textContent = "Aberta agora";
      until.textContent = "até 07:00";
    } else {
      label.textContent = "Hoje à noite";
      until.textContent = "das 22:00 às 07:00";
    }

    nameEl.innerHTML = (n.pre ? '<span class="name-pre">' + esc(n.pre) + "</span> " : "") +
      '<span class="name-main">' + esc(n.main) + "</span>";
    addr.textContent = f.endereco;
    strength.hidden = false;
    strength.textContent = f.setor;
    lot.hidden = false;
    $("lot-start").textContent = ddmm(r.night) + " 22:00";
    $("lot-end").textContent = ddmm(end) + " 07:00";

    maps.href = mapsUrl(f);
    $("maps-label").textContent = "Como chegar";

    var quando = r.state === "open" ? "Farmácia de plantão agora em Jaru (até 07:00)" :
      "Farmácia de plantão hoje à noite em Jaru (22:00 às 07:00)";
    wa.hidden = false;
    wa.href = "https://wa.me/?text=" + encodeURIComponent(
      quando + ": " + f.nome + ", " + f.endereco + ", " + f.setor + ". " + mapsUrl(f));

    fine.textContent = r.state === "open"
      ? "Escala oficial da Prefeitura de Jaru, elaborada pela ACIJ. Confirme antes de sair de casa."
      : "Agora as farmácias estão em horário comercial. O plantão começa às 22:00. Escala oficial da Prefeitura de Jaru (ACIJ).";
  }

  function renderNext(r) {
    var html = "";
    if (!HAS_DATA) {
      $("next-list").innerHTML = '<li class="gap"><div class="who"><strong>Próximas noites indisponíveis</strong>' +
        "<span>A escala não carregou. Recarregue a página.</span></div></li>";
      return;
    }
    for (var i = 1; i <= 7; i++) {
      var date = addDays(r.night, i);
      var f = dutyOn(date);
      if (!f) {
        // Sem escala daqui em diante: uma linha só, em vez de várias iguais.
        html += '<li class="gap"><div class="who"><strong>Sem escala publicada a partir de ' + ddmm(date) +
          "</strong><span>Consulte o site da Prefeitura de Jaru.</span></div></li>";
        break;
      }
      var diff = Math.round((date - r.today) / DAY);
      var tag = diff === 0 ? "hoje" : diff === 1 ? "amanhã" : weekday(date);
      html += "<li><div class=\"when\"><b>" + pad(date.getUTCDate()) + "</b><small>" + tag + "</small></div>" +
        '<div class="who"><strong>' + esc(f.nome) + "</strong><span>" + esc(f.endereco) + " · " + esc(f.setor) + "</span></div></li>";
    }
    $("next-list").innerHTML = html;
  }

  function renderTabs() {
    var months = Object.keys(ESCALA).sort();
    $("tabs").innerHTML = months.map(function (k) {
      var d = cal(+k.slice(0, 4), +k.slice(5, 7), 1);
      var sel = k === activeMonth;
      return '<button type="button" role="tab" data-month="' + k + '" aria-selected="' + sel + '"' +
        (sel ? "" : ' tabindex="-1"') + ">" + esc(fmtMonth.format(d).slice(0, 3)) + "</button>";
    }).join("");
  }

  function renderSheet(r) {
    var list = ESCALA[activeMonth] || [];
    var y = +activeMonth.slice(0, 4), mo = +activeMonth.slice(5, 7);
    $("month-name").textContent = fmtMonth.format(cal(y, mo, 1));

    var q = norm($("q").value.trim());
    var rows = "";
    var shown = 0;
    list.forEach(function (key, i) {
      var f = FARMACIAS[key];
      if (!f) return;
      if (q && norm(f.nome + " " + f.endereco + " " + f.setor).indexOf(q) === -1) return;
      var date = cal(y, mo, i + 1);
      var t = date.getTime(), nt = r.night.getTime();
      var cls = t < nt ? "past" : t === nt ? (r.state === "open" ? "current" : "tonight") : "";
      var aria = cls === "current" ? ' aria-current="date"' : "";
      rows += '<tr class="' + cls + '"' + aria + '><td><span class="d">' + pad(i + 1) + '</span><span class="wd">' +
        weekday(date) + '</span></td><td class="f">' + esc(f.nome) + '</td><td class="a">' +
        esc(f.endereco) + " · " + esc(f.setor) + "</td></tr>";
      shown++;
    });
    $("sheet-body").innerHTML = rows;

    var empty = $("empty");
    empty.hidden = shown > 0;
    if (!shown) empty.textContent = "Nenhuma farmácia com “" + $("q").value.trim() + "” na escala deste mês.";
  }

  function tick() {
    var now = jaruNow();
    $("clock").textContent = pad(now.h) + ":" + pad(now.mi);

    var r = resolve(now);
    var key = r.state + "|" + r.night.getTime() + "|" + (now.h >= 18 || now.h < 7);
    if (key === lastKey) return;
    var first = lastKey === null;
    lastKey = key;

    if (first && !HAS_DATA) $("escala").hidden = true;
    if (first && HAS_DATA) {
      activeMonth = ESCALA[monthKey(r.night)] ? monthKey(r.night) : Object.keys(ESCALA).sort()[0];
      renderTabs();
    }
    renderBox(r, now);
    renderNext(r);
    if (HAS_DATA) renderSheet(r);

    // A tarja é impressa de novo quando o plantão muda.
    var tarja = $("tarja");
    tarja.classList.remove("is-printing");
    void tarja.offsetWidth;
    tarja.classList.add("is-printing");
    current = r;
    if (first) requestAnimationFrame(function () { document.documentElement.classList.add("ready"); });
  }

  var current = null;

  $("tabs").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-month]");
    if (!b) return;
    activeMonth = b.dataset.month;
    renderTabs();
    renderSheet(current);
    $("tabs").querySelector('[aria-selected="true"]').focus();
  });

  $("tabs").addEventListener("keydown", function (e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var months = Object.keys(ESCALA).sort();
    var i = months.indexOf(activeMonth) + (e.key === "ArrowRight" ? 1 : -1);
    if (i < 0 || i >= months.length) return;
    activeMonth = months[i];
    renderTabs();
    renderSheet(current);
    $("tabs").querySelector('[aria-selected="true"]').focus();
  });

  $("q").addEventListener("input", function () { renderSheet(current); });

  tick();
  setInterval(tick, 20000);
})();
