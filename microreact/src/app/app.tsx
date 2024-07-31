// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import NxWelcome from './nx-welcome';

const Home = () =>  <div>
<NxWelcome title="microreact" />

</div>;
const About = () => <div>About Page</div>;

export function App() {
  return (
     <Router>
     <div className={styles.container}>
    
      <nav>
      <ul>
        <li>
          <Link to="/microreact">Home</Link>
        </li>
        <li>
          <Link to="/microreact/about">About</Link>
        </li>
      </ul>
    </nav>
       <Routes>
         <Route path="/microreact" element={<Home />} />
         <Route path="/microreact/about" element={<About />} />
       </Routes>
     </div>
   </Router>
  );
}

export default App;
