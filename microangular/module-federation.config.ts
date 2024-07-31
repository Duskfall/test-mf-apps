import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'microangular',
  exposes: {
    './Routes': 'microangular/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
