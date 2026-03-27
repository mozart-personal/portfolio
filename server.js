const express = require('express');
const path = require('path');
const app = express();
const port = 80; // A Square Cloud exige a porta 80 para aplicativos web

// Serve os arquivos estáticos gerados pelo Vite na pasta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Qualquer rota não encontrada vai para o index.html do React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Falixtab rodando na porta ${port}!`);
});
