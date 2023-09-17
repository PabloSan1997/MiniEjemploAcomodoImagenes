import express from 'express';
import { createApi } from './ruta/index.js';
import cors from 'cors';
import { boomHandle } from './middleware/boomHandle.js';

const app = express();
const PORT = 3004;

app.use(cors());
app.use(express.json());

createApi(app);

app.use(boomHandle);

app.listen(PORT, ()=>{
	console.log(`http:localhost:${PORT}`);
});