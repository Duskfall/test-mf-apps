import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Microreact = React.lazy(() => import('microreact/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/microreact">Microreact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host-react" />} />

        <Route path="/microreact" element={<Microreact />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
