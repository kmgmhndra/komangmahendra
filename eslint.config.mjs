import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ====================================================================
  // ===== TAMBAHKAN OBJEK BARU DI BAWAH INI UNTUK MENGUBAH ATURAN =====
  // ====================================================================
  {
    rules: {
      // Ini akan mengubah error menjadi peringatan (warning) saja.
      // Build Anda akan BERHASIL, tapi Anda tetap diberi tahu di log.
      "@typescript-eslint/no-explicit-any": "warn",
      "react/no-unescaped-entities": "warn",
      
      // Jika Anda ingin menonaktifkan aturan variabel tidak terpakai:
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  // ====================================================================

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;