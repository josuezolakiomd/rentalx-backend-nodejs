import express from 'express';
import { setup, serve } from 'swagger-ui-express';
import { config } from 'dotenv';
import cors from 'cors';

import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();
config({ path: '.env' });

app.use(cors());
app.use(express.json());

app.use('/api-docs', serve, setup(swaggerFile));

app.use(router);

app.listen(process.env.PORT as string, () => {
  console.log('Server running on http://localhost:3333');
});
