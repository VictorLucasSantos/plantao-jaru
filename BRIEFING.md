# Plantão Jaru — briefing

Site estático (HTML/CSS/JS puro) que responde, em segundos e pelo celular: **qual farmácia está de plantão agora em Jaru–RO**.

## Dados
- `data/escala.js` — escala oficial out–dez/2026 (Prefeitura de Jaru / ACIJ). Os PDFs não trazem telefone; não inventar.
- Plantão = 22:00 do dia D até 07:00 do dia D+1, fuso `America/Porto_Velho`.
  - 00:00–06:59 → plantão é o da data de ontem.
  - 22:00–23:59 → plantão é o da data de hoje.
  - 07:00–21:59 → comércio normal aberto; mostrar "hoje à noite, a partir das 22h: X".
- Botão "Como chegar" → Google Maps com `endereço + Jaru RO`.

## Conteúdo
1. Resposta principal: farmácia de plantão agora (ou de hoje à noite), endereço, setor, como chegar.
2. Próximas noites (7 dias).
3. Calendário do mês, com busca por farmácia.
4. Rodapé: fonte oficial com link, data da última atualização, aviso para confirmar por telefone.

## Direção visual (não parecer feito por IA)
- Pensar em placa de rua / aviso impresso na porta da farmácia, não em landing page de SaaS.
- Nada de: gradiente roxo/azul, texto em gradiente, glassmorphism, cards dentro de cards, ícones emoji, hero centralizado genérico, Inter/Roboto como fonte padrão, "seções" com 3 cards de features.
- Uso noturno: tema escuro de verdade, alto contraste, tipografia grande e legível no celular.
- Ferramenta: skill **impeccable** (`npx skills add pbakaus/impeccable`) — usar para construir e depois `/audit` e `/polish`.
