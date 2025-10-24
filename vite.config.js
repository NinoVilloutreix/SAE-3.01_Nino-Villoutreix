import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/SAE-301_Nino-Villoutreix",
  build: {
   rollupOptions: {
     input: {
       main: resolve(__dirname, "index.html"),
       cheeseburger: resolve(__dirname, "pages/CheeseBurger.html"),
       frites: resolve(__dirname, "pages/Frites.html"),
       commande: resolve(__dirname, "pages/Commande.html"),
       profil: resolve(__dirname, "pages/Profil.html")
     },
   },
 },
});