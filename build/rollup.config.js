import babel from 'rollup-plugin-babel';
import { eslint } from "rollup-plugin-eslint";
import typescript from 'rollup-plugin-typescript2';
import cleaner from 'rollup-plugin-cleaner';
import pkg from '../package.json';

const formats = ['umd', 'esm'];
const output = formats.map((format) => ({
  file: `dist/${pkg.name}.${format}.min.js`,
  format,
  name: pkg.name,
  // exports: 'named', /** Disable warning for default imports */
}));

export default {
	input: 'src/index.ts',
	output,
  external: [],
  plugins: [
    typescript(),
    eslint({
			fix: true,
      exclude: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    cleaner({
      targets: [
        './dist/'
      ]
    })
  ],
};
