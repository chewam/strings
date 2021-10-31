import { createConnection, Connection } from "typeorm";

const connection = createConnection({
  type: "postgres",
  host: process.env.COCKROACH_HOST || "",
  port: Number(process.env.COCKROACH_PORT) || 0,
  username: process.env.COCKROACH_USERNAME || "",
  password: process.env.COCKROACH_PASSWORD || "",
  database: process.env.COCKROACH_DATABASE || "",
});

export default connection;
