import { FC } from 'react';
import { BrowserRouter as Router} from "react-router-dom";


// css
import './css/main.css';

// components
import Navbar from './components/layout/Navbar';
import MainWrapper from './components/layout/MainWrapper';

const App: FC = () => {
  return (
    <Router>
      <Navbar />

      <MainWrapper />
    </Router>
  );
};

export default App;
