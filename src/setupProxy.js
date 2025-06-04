const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs').promises;
const path = require('path');

const apiRouter = express.Router();

// Configuração da rota de API
apiRouter.post('/save-email', express.json(), async (req, res) => {
  try {
    const { email, recipe, date } = req.body;
    const emailsFilePath = path.join(__dirname, 'data/emails.json');

    // Garante que o diretório existe
    await fs.mkdir(path.dirname(emailsFilePath), { recursive: true });

    // Lê o arquivo atual ou cria um novo
    let data;
    try {
      const fileContent = await fs.readFile(emailsFilePath, 'utf-8');
      data = JSON.parse(fileContent);
    } catch (error) {
      data = { emails: [] };
    }

    // Adiciona o novo email
    data.emails.push({
      email,
      recipe,
      date: date || new Date().toISOString()
    });

    // Salva o arquivo atualizado
    await fs.writeFile(emailsFilePath, JSON.stringify(data, null, 2));

    res.json({ success: true });
  } catch (error) {
    console.error('Erro ao salvar email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Configuração do proxy
module.exports = function(app) {
  app.use('/api', apiRouter);
}; 