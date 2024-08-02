import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
// import { terser } from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/prankjs.cjs.js',
      format: 'cjs',
      exports: 'named', // Use named exports for CommonJS
    },
    {
      file: 'dist/prankjs.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/prankjs.umd.js',
      format: 'umd',
      name: 'PrankJS',
      exports: 'named', // Use named exports for UMD
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    // terser(),
  ],
};
