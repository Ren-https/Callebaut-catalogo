const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/save-email', async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 