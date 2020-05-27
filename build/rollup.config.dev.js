import serve from 'rollup-plugin-serve';
import config from './rollup.config';

const PORT = 3001;

config.output.sourcemap = true;
config.plugins = [
  ...config.plugins,
  ...[
    serve({
      open: false,
      contentBase: ['dist', 'example'],
      historyApiFallback: true,
      host: 'localhost',
      port: PORT,
    }),
  ],
];

export default config;
