import express from 'express';
import routes from './routes/routes.js';

const app = express();

const PORT = 3333;

app.use(express.json())
app.use(routes)

global.users = []

app.listen(PORT, () => console.log(`server running in localhost:${ PORT }`))