import { uglify } from 'rollup-plugin-uglify';
import config from './rollup.config';

config.output.sourcemap = false;
config.plugins = [
  ...config.plugins,
  ...[
    uglify(),
  ],
];

export default config;