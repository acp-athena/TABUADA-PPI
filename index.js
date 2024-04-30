const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  const numero = parseInt(req.query.tabuada) || 1;

  let tabuadaHtml = `<h1>Tabuada do ${numero}</h1>`;
  tabuadaHtml += '<table border="1"><tr><th>Número</th><th>Resultado</th></tr>';
  for (let i = 1; i <= sequencia; i++) {
    const resultado = numero * i;
    tabuadaHtml += `<tr><td>${i}</td><td>${resultado}</td></tr>`;
  }
  tabuadaHtml += '</table>';
  tabuadaHtml += '<p>Ana Carolina Almeida Paula</p>'
  const paginaHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Tabuada (atividade PPI)</title>
    </head>
    <body>
        ${tabuadaHtml}
    </body>
    </html>
  `;
  res.send(paginaHtml);
});

app.listen(port, () => {
  console.log(`Aplicativo rodando em http://localhost:${port}`);
});