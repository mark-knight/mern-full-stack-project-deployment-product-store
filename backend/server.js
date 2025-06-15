import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
process.env.PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/products', productRoutes);

console.log(process.env.MONGO_URI);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
}
);



