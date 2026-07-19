import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Custom domain (www.johnppatterson.com) serves from the root, so base stays "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
