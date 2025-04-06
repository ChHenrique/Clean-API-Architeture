import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'default_secret',
  DATABASE_URL: process.env.DATABASE_URL || '',
}