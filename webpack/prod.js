import TerserJSPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config = {
  // minify
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({})]
  },
  // plugin - clean webpack
  plugins: [new CleanWebpackPlugin()],
  // performance 힌트
  performance: {
    hints: 'warning',
    // 500 KB
    maxEntrypointSize: 512000,
    // 500 KB
    maxAssetSize: 512000
  }
};

export default config;
