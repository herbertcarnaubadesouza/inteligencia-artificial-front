require('dotenv').config();

const cors = require('cors');
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(cors());


app.post('/api/gpt3', async (req, res) => {
  const { input } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: input,
      max_tokens: 100,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.send(response.data.choices[0].text.trim());
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao comunicar com a API da OpenAI');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

