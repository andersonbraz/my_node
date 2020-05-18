// importando os pacotes para uso no arquivo index.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// importando os pacote para Metrics Prometheus
const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ prefix: 'my_api_nodejs:' });

const histogram = new client.Histogram({
    name: 'my_api_nodejs:sample_duration',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'status_code'],
    buckets: [0.1, 5, 15, 50, 100, 500]
});

// crio um servidor express
const app = express();

// aplico configurações para dentro do servidor express, adicionando middlewares (body-parser, morgan, cors)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// correção para o erro 404 do favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204));

// uma resposta legível simulando um retorno de banco de dados
const data = [{title:"Node API Express", version:"4.17.1"}];
const alphabet = [{ "id": 1, "caption": "alpha" }, { "id": 2, "caption": "bravo" }, { "id": 3, "caption": "charlie" }, { "id": 4, "caption": "delta" }, { "id": 5, "caption": "eco" }, { "id": 6, "caption": "fox" }, { "id": 7, "caption": "golf" }, { "id": 8, "caption": "hotel" }, { "id": 9, "caption": "india" }, { "id": 10, "caption": "juliet" }, { "id": 11, "caption": "kilo" }, { "id": 12, "caption": "lima" }, { "id": 13, "caption": "mike" }, { "id": 14, "caption": "november" }, { "id": 15, "caption": "oscar" }, { "id": 16, "caption": "papa" }, { "id": 17, "caption": "quebec" }, { "id": 18, "caption": "romeu" }, { "id": 19, "caption": "sierra" }, { "id": 20, "caption": "tango" }, { "id": 21, "caption": "uniform" }, { "id": 22, "caption": "victor" }, { "id": 23, "whisky": "mike" }, { "id": 24, "caption": "x-ray" }, { "id": 25, "caption": "yankee" }, { "id": 26, "caption": "zulu" }];
const members = ["Anderson", "Caio", "Diogo", "Jeovah", "Jair", "Banco do Brasil", "Capgemini"];


// criação de rota que será acessada utilizando o método HTTP GET/
app.get('/', (req, res) => {
    const end = histogram.startTimer();
    end({ method: req.method, 'status_code': 200 });
    return res.json({ data });
});

app.get('/alphabet', (req, res) => {
    const end = histogram.startTimer();
    end({ method: req.method, 'status_code': 200 });
    return res.json({ alphabet });
});

app.get('/members', (req, res) => {
    const end = histogram.startTimer();
    end({ method: req.method, 'status_code': 200 });
    return res.json({ members });
});

app.post('/add', (req, res) => {
    const result = req.body;
    const end = histogram.startTimer();

    if (!result) {
        return res.status(400).end();
    }

    data.push(result);
    end({ method: req.method, 'status_code': 200 });
    return res.json({ result });

});

app.get('/metrics', (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.send(client.register.metrics());
});

// o servidor irá rodar dentro da porta 9000
app.listen(9000, () => console.log('Express started at http://localhost:9000'));