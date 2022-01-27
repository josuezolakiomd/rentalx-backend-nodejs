import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { router } from './routes';

const app = express();
config({ path: '.env' });

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.PORT as string, () => {
  console.log('Server running on http://localhost:3333');
});
