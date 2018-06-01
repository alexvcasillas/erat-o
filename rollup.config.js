import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default [
  {
    input: './src/index.js',
    output: {
      file: './dist/erat-o.js',
      format: 'cjs'
    },
    plugins: [resolve(), babel(), uglify(), filesize()]
  },
  {
    input: './src/index.js',
    output: {
      file: './dist/erat-o.umd.js',
      format: 'umd',
      name: 'erat-o'
    },
    plugins: [resolve(), babel(), uglify(), filesize()]
  },
  {
    input: './src/index.js',
    output: {
      file: './dist/erat-o.module.js',
      format: 'es'
    },
    plugins: [resolve(), babel(), uglify(), filesize()]
  }
];
