import axios from "axios";

// Ejemplo seguro
const isServer = typeof window === "undefined";
export const instance = axios.create({
  baseURL: isServer
    ? process.env.NEXT_PUBLIC_BASE_URL
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/api`
      : "http://localhost:3001/api"
    : "/api",
});
