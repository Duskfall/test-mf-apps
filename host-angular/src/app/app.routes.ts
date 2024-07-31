import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'microangular',
    loadChildren: () =>
      loadRemoteModule('microangular', './Routes').then((m) => m.remoteRoutes),
  },
  
  {
    path: 'microreact',
    component: WebComponentWrapper,
    data: {
      remoteEntry: `http://localhost:4301/remoteEntry.js`,
      remoteName: 'http_mfe_react',
      exposedModule: './web-components',
      elementName: 'http-mfe-react-element',
    },
    children: [
      {
        path: '**',
        component: WebComponentWrapper,
        data: {
          remoteEntry: `http://localhost:4301/remoteEntry.js`,
          remoteName: 'http_mfe_react',
          exposedModule: './web-components',
          elementName: 'http-mfe-react-element',
        },
      },
    ],
  },
  
  {
    path: '',
    component: NxWelcomeComponent,

  },
];
