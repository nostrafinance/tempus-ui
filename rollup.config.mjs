import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import sass from 'rollup-plugin-sass';
import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
      },
      {
        file: packageJson.module,
        format: 'esm',
      },
    ],
    plugins: [
      sass({ insert: true }),
      json(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['setupTests.ts', '**/*.test.ts', '**/*.spec.ts'],
      }),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.scss$/],
    plugins: [dts()],
  },
];
