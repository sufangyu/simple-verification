import babel from 'rollup-plugin-babel';
import { eslint } from "rollup-plugin-eslint";
import typescript from 'rollup-plugin-typescript2';
import cleaner from 'rollup-plugin-cleaner';
import { terser } from "rollup-plugin-terser";
import serve from 'rollup-plugin-serve';
import pkg from './package.json';

// 端口
const PORT = 3001;
// 是否是生产
const IS_PROD = process.env.NODE_ENV === 'production';

const formats = ['umd', 'esm'];
const output = formats.map((format) => ({
  file: `dist/index.${format}.js`,
  format,
  name: pkg.name,
}));

// 生成模式生成压缩文件
if (IS_PROD) {
  formats.forEach((format) => {
    output.push({
      file: `dist/index.${format}.min.js`,
      format,
      name: pkg.name,
      plugins: [terser()],
    });
  });
}

export default {
	input: 'src/index.ts',
	output,
  external: [],
  plugins: [
    eslint({
      fix: true,
      exclude: 'node_modules/**'
    }),
    typescript(),
    babel({
      exclude: 'node_modules/**',
    }),
    cleaner({
      targets: [
        './dist/'
      ]
    }),
    !IS_PROD && (
      serve({
        open: false,
        contentBase: ['dist', 'example'],
        historyApiFallback: true,
        host: 'localhost',
        port: PORT,
      })
    ),
  ],
};
