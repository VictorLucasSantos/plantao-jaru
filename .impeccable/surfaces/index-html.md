---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

Scope: página única `index.html` (Plantão Jaru). Mode: Operate.

Audience/job: morador de Jaru no celular, muitas vezes de madrugada, quer saber qual farmácia está aberta agora e como chegar. Constraints: dados só de `data/escala.js`; sem telefones; datas fora da escala dizem isso honestamente.

Memorable moment: a tarja amarela atravessando a caixa e marcando quem está aberta agora.

Open decisions: domínio/hospedagem; escala de 2027 quando a ACIJ publicar.

## Direction contract

THESIS: A farmácia de plantão impressa como a face de uma caixa de remédio brasileira; a tarja diz quem está aberta. Recusa o padrão da categoria: cartão branco com cruz verde e lista genérica.

OWN-WORLD: Cartão de embalagem (claro de dia; tinta escura de noite, a página segue o horário de Jaru), tinta #141414, tarja amarela do genérico #f5c400 como única cor de estado "aberta", vermelho de tarja só para aviso/fora da escala. Archivo em largura condensada pesada para nomes, como nome de medicamento; Archivo normal para texto; algarismos tabulares. Estado pela forma: agora = tarja cheia sangrando de borda a borda; hoje à noite = tarja contornada; passadas = riscadas. Carimbo de lote/validade com a janela do plantão.

STORY: Abre, lê o nome em caixa alta, vê "aberta até 7h", toca em Como chegar ou manda pelo WhatsApp. Se quiser, consulta as próximas noites e a bula do mês.

FIRST VIEWPORT: Barra fina: marca Plantão Jaru, hora atual de Jaru. A caixa ocupa a largura: tarja de estado no topo sangrando, nome da farmácia enorme (condensado, 2 linhas no celular), endereço e setor como "princípio ativo", carimbo de validade 22:00→07:00, botões Como chegar (primário) e Enviar no WhatsApp. No desktop, as próximas 7 noites ficam ao lado da caixa.

FORM: Caixa de remédio (embalagem brasileira), candidato 3 da lista ordenada; seed key 2eef8934. Signature move: a tarja impressa (wipe único em clip-path ao carregar e ao virar 22h/7h).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
