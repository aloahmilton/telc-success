import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "punycode/": "punycode",
      // Stub out Node-only built-ins so mongoose never crashes the browser
      "events": path.resolve(__dirname, "src/lib/stubs/events.ts"),
      "net": path.resolve(__dirname, "src/lib/stubs/empty.ts"),
      "tls": path.resolve(__dirname, "src/lib/stubs/empty.ts"),
      "dns": path.resolve(__dirname, "src/lib/stubs/empty.ts"),
      "fs": path.resolve(__dirname, "src/lib/stubs/empty.ts"),
      "mongoose": path.resolve(__dirname, "src/lib/stubs/mongoose.ts"),
      // Stub server-only src modules that access global/process
      "@/lib/db": path.resolve(__dirname, "src/lib/stubs/db.ts"),
      "@/lib/adminDataService": path.resolve(__dirname, "src/lib/stubs/adminDataService.ts"),
      "@/lib/seedDatabase": path.resolve(__dirname, "src/lib/stubs/seedDatabase.ts"),
    },
  },
  optimizeDeps: {
    exclude: ["mongoose"],
  },
});
