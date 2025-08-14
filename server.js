import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

app.post('/data', (req, res) => {
    const data = req.body;
    res.send(`Вы отправили данные: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});