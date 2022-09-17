import merge from 'webpack-merge';
import baseConfig from './base';
import devConfig from './dev';
import prodConfig from './prod';

// dev / prod 구분
const isDev = process.env.NODE_ENV !== 'production';

// webpack config merge
const configs = isDev
  ? merge(baseConfig, devConfig)
  : merge(baseConfig, prodConfig);

export default () => configs;
