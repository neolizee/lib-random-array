import terser from '@rollup/plugin-terser';
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/lib-random-array.ts",
  output: [
    { dir: "build/cjs", format: "cjs" },
    { dir: "build/min", format: "cjs", plugins: [terser()] },
    { dir: "build/esm", format: "esm" },
  ],
  plugins: [typescript({ useTsconfigDeclarationDir: true, tsconfig: 'tsconfig.json' })],
};
