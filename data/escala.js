// Escala de plantão das farmácias e drogarias de Jaru–RO.
// Fonte: Prefeitura de Jaru (escala elaborada pela ACIJ), PDFs mensais em
// https://jaru.ro.gov.br/wp-content/uploads/2025/12/<N>-<Mes>.pdf
// O plantão de cada data começa às 22:00 desse dia e termina às 07:00 do dia seguinte
// (horário de Rondônia, America/Porto_Velho, UTC-4).

window.FARMACIAS = {
  up1:        { nome: "Farmácia Ultra Popular",    endereco: "Av. Dom Pedro I, 2484",            setor: "Setor 05" },
  up2:        { nome: "Farmácia Ultra Popular",    endereco: "Av. Padre Adolpho Rohl, 1623",     setor: "Setor 01" },
  rd:         { nome: "Farmácia RD Farma",         endereco: "Av. Padre Adolpho Rohl, 1528",     setor: "Setor 02" },
  mini:       { nome: "Farmácia Mini Preço",       endereco: "Av. Dom Pedro I, 2568",            setor: "Setor 05" },
  dez:        { nome: "Farmácia Dez",              endereco: "R. Marechal Rondon, 2915",         setor: "Setor 01" },
  drogasil:   { nome: "Drogasil",                  endereco: "R. Belo Horizonte, 3055",          setor: "Setor 05" },
  santos:     { nome: "Drogaria Santos",           endereco: "Av. Florianópolis, 1735",          setor: "Setor 07" },
  mais:       { nome: "Farmácia Mais Saúde",       endereco: "Av. Florianópolis, 1719",          setor: "Setor 07" },
  farmadroga: { nome: "Farmácia Farmadroga",       endereco: "Av. Padre Adolpho Rohl, 1954",     setor: "Setor 01" },
  lucia:      { nome: "Farmácia Santa Lúcia",      endereco: "Av. Dom Pedro I, 2552",            setor: "Setor 05" },
  ultramed:   { nome: "Farmácia Ultramed",         endereco: "Av. Rio de Janeiro, 2904",         setor: "Setor 03" },
  pb1:        { nome: "Farmácia Preço Baixo I",    endereco: "R. Marechal Rondon, 2949",         setor: "Setor 01" },
  economize:  { nome: "Farmácia Economize",        endereco: "Av. Dom Pedro I, 2616",            setor: "Setor 05" },
  aqui:       { nome: "Pharmacia Aqui Mini Preço", endereco: "Av. Padre Adolpho Rohl, 1544",     setor: "Setor 02" },
  pb2:        { nome: "Farmácia Preço Baixo II",   endereco: "Av. Dom Pedro I, 2568",            setor: "Setor 05" },
  unifarma:   { nome: "Farmácia Unifarma",         endereco: "Av. JK, 1187",                     setor: "Setor 03" },
  lider:      { nome: "Farmácia Líder",            endereco: "Av. Padre Adolpho Rohl, 1570",     setor: "Setor 02" },
  farminas:   { nome: "Farmácia Farminas",         endereco: "Av. Dom Pedro I, 3056",            setor: "Setor 05" },
  pague:      { nome: "Farmácia Pague Menos",      endereco: "Av. Padre Adolpho Rohl, 1484",     setor: "Setor 02" },
  poupe:      { nome: "Farmácia Poupe Mais",       endereco: "Av. Manoel Mariano da Silva, 1953", setor: "Savana" },
};

// Uma chave por dia do mês, a partir do dia 1.
window.ESCALA = {
  "2026-10": ["up1","rd","mini","dez","drogasil","santos","mais","farmadroga","lucia","ultramed","pb1",
              "up2","economize","aqui","pb2","unifarma","lider","farminas","pague","poupe",
              "up1","rd","mini","dez","drogasil","santos","mais","farmadroga","lucia","ultramed","pb1"],
  "2026-11": ["up2","economize","aqui","pb2","lider","unifarma","farminas","pague","poupe","up1",
              "rd","mini","drogasil","dez","santos","mais","farmadroga","lucia","ultramed","pb1",
              "up2","economize","aqui","pb2","lider","unifarma","farminas","pague","poupe","up1"],
  "2026-12": ["rd","mini","dez","drogasil","santos","mais","farmadroga","lucia","ultramed","pb1",
              "up2","economize","aqui","pb2","lider","unifarma","farminas","pague","poupe","up1",
              "rd","mini","dez","drogasil","santos","mais","farmadroga","lucia","ultramed","pb1","up2"],
};
