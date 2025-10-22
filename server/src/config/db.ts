import dotenv from "dotenv"; // Import 'dotenv' as a module
dotenv.config();

const { PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// DB CONFIG
const config = {
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: Number(PGPORT), 
  ssl: {
    rejectUnauthorized: false, 
  },
};

export default config;
