# Plantão Jaru

Mostra qual farmácia está de plantão agora em Jaru–RO, com endereço e como chegar. É um site estático (HTML, CSS e JavaScript), sem etapa de build.

## Dados

A escala fica em [`data/escala.js`](data/escala.js) e foi transcrita dos PDFs mensais da Prefeitura de Jaru (escala elaborada pela ACIJ). Hoje ela cobre outubro a dezembro de 2026.

O plantão de cada data vai das 22:00 até as 07:00 do dia seguinte, no horário de Rondônia (`America/Porto_Velho`).

Para acrescentar um mês:

1. Inclua a farmácia em `FARMACIAS`, se ela ainda não estiver lá.
2. Crie a chave `"AAAA-MM"` em `ESCALA` com uma farmácia por dia, a partir do dia 1.
3. Coloque o link do PDF oficial no rodapé do `index.html`.

## Rodar localmente

```bash
python -m http.server 8780
```

Para simular um horário, acrescente `?agora=2026-10-14T23:15` ao endereço.

## Publicação

O workflow em `.github/workflows/pages.yml` publica no GitHub Pages a cada push na `main`. Ele envia só `index.html`, `style.css`, `app.js`, `data/` e `fonts/`.

## Licenças

A fonte Archivo é distribuída sob a SIL Open Font License 1.1; veja [`fonts/OFL.txt`](fonts/OFL.txt).
Este site é independente e não tem ligação com a Prefeitura de Jaru nem com a ACIJ.
