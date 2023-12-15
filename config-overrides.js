// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require('path');

// module.exports = function override(config, env) {
//   // Utilisation de MiniCssExtractPlugin
//   const miniCssExtractPluginIndex = config.plugins.findIndex(
//     (plugin) => plugin instanceof MiniCssExtractPlugin
//   );

//   if (miniCssExtractPluginIndex !== -1) {
//     config.plugins[miniCssExtractPluginIndex] = new MiniCssExtractPlugin({
//       filename: 'static/css/[name].[contenthash:8].css',
//       chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
//     });
//   }

//   // Optimisation des images avec image-webpack-loader
//   config.module.rules = config.module.rules.map((rule) => {
//     if (
//       rule.test &&
//       rule.test.toString().includes('svg') &&
//       rule.use &&
//       rule.use.loader &&
//       rule.use.loader.includes('file-loader')
//     ) {
//       rule.exclude = path.resolve('src/assets/svg');
//       return {
//         oneOf: [
//           {
//             test: /\.svg$/,
//             include: path.resolve('src/assets/svg'),
//             use: [
//               {
//                 loader: 'svg-url-loader',
//                 options: {
//                   limit: 10 * 1024, // inline les petites images sous forme de data URL
//                   encoding: 'base64',
//                 },
//               },
//             ],
//           },
//           ...rule.oneOf,
//         ],
//       };
//     }
//     return rule;
//   });

//   return config;
// };