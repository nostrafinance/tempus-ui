import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import replace from 'rollup-plugin-replace';
import scss from 'rollup-plugin-scss';
import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      scss(),
      resolve({
        browser: true,
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      json(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['setupTests.ts', '**/*.test.ts', '**/*.spec.ts'],
      }),
    ],
  },
  {
    input: 'dist/esm/types/components/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.scss$/],
    plugins: [dts()],
  },
];
