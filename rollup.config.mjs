import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
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
      json(),
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
