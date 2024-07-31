import { ModuleFederationConfig } from '@nx/webpack';
import * as path from 'path';

const config: ModuleFederationConfig = {
  name: 'microreact',

  library: { type: 'var', name: 'http_mfe_react' },
  exposes: {
    './web-components': path.resolve(__dirname, './src/bootstrap.tsx'),
  }, 
};

export default config;
