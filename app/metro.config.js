/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const {FileStore} = require('metro-cache');
const {resolve} = require('metro-resolver');
const getWorkspaces = require('get-yarn-workspaces');
const workspaces = getWorkspaces(__dirname);
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  projectRoot: path.resolve(__dirname, '.'),
  watchFolders: [path.resolve(__dirname, '../node_modules'), ...workspaces],

  resolver: {
    blacklistRE: blacklist([
      /node_modules\/.*\/node_modules\/react-native\/.*/
    ]),

    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(process.cwd(), `node_modules/${name}`)
      }
    ),

    resolveRequest: (context, realModuleName, platform, moduleName) => {
      let backupResolveRequest = context.resolveRequest;
      delete context.resolveRequest;

      try {
        let modifiedModuleName = moduleName;
        if (moduleName.startsWith('./debugger-ui/')) {
          modifiedModuleName = `./node_modules/@react-native-community/cli-debugger-ui/build/ui/${modifiedModuleName.slice(
            './debugger-ui/'.length
          )}`;
        }
        let result = resolve(context, modifiedModuleName, platform);
        return result;
      } catch (e) {
        throw e;
      } finally {
        context.resolveRequest = backupResolveRequest;
      }
    }
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    }),
    cacheStores: [
      new FileStore({
        root: path.join(__dirname, 'metro-cache')
      })
    ]
  }
};
