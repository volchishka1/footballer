/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const watchFolders = [
  //Relative path to packages directory
  // eslint-disable-next-line no-path-concat
  path.resolve(__dirname + '../../../components'),
];
// require('dotenv').config({
//   path: path.join(process.cwd(), '..', '..', '..', '.env'),
// });
//
// module.exports = process.env;

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders,
};
