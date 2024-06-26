const express = require('express');
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  const numero = parseInt(req.query.tabuada) || 1;
  const sequencia = parseInt(req.query.sequencia) || 10;

  let tabHtml = '<p>Ana Carolina Almeida Paula</p>'
  tabHtml += '<p>Atividade 1 de Programação para a Internet</p>'
  tabHtml += `<h1>Tabuada do numero ${numero} até a sequência ${sequencia}</h1>`;
  tabHtml += '<table><tr><th>Número</th><th>Resultado</th></tr>';
  for (let i = 1; i <= sequencia; i++) {
    const resultado = numero * i;
    tabHtml += `<tr><td>${i}</td><td>${resultado}</td></tr>`;
  }
  tabHtml += '</table>';
  tabHtml += '<h2>Para acessar outras tabuadas use esse exemplo: https://tabuada-ppi-lpwr.vercel.app/?tabuada=4&sequencia=20</h2>'
  const pagHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Tabuada (atividade PPI)</title>
        <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background: linear-gradient(to bottom, #333333, #ffffff);
        }
        
        h1 {
          text-align: center;
          color: black;
        }
        
        table {
          margin: 0 auto;
          border-collapse: collapse;
        }
        
        table, th, td {
          border: 1px solid #333;
        }
        
        th, td {
          padding: 10px;
        }
        
        th {
          background-color: #f2f2f2;
        }
        
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        
        tr:nth-child(odd) {
          background-color: #fff;
        }
        
        p {
          text-align: center;
          color: white;
          margin-top: 20px;
        }        

        h2 {
          text-align: center;
          color: black;
          margin-top: 20px;
        }   
        </style>
    </head>
    <body>
        ${tabHtml}
    </body>
    </html>
  `;
  res.send(pagHtml);
});

app.listen(port, () => {
  console.log(`Aplicativo rodando em http://localhost:${port}`);
});