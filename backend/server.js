import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/authRoutes.js';
import donationRoutes from './routes/donationRoutes.js';
import allocationRoutes from './routes/allocationRoutes.js';
import reportRoutes from './routes/reportRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/allocations', allocationRoutes);
app.use('/api/reports', reportRoutes);

app.get('/', (req, res) => res.send('NGO Platform API running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
