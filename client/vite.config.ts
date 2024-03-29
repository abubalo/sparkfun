import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@types": path.resolve(__dirname, "../types/"),
      "@": path.resolve(__dirname, "./src/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@shared": path.resolve(__dirname, "./src/components/shared/"),
      "@icons": path.resolve(__dirname, "./src/components/shared/icons/"),
      "@queries": path.resolve(__dirname, "./src/utils/queries/"),
      "@redux": path.resolve(__dirname, "./src/utils/redux/"),
      "@hooks": path.resolve(__dirname, "./src/utils/hooks/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
    },
  },
});
