import { FC, useEffect, useCallback } from 'react';
import { BrowserRouter as Router} from "react-router-dom";


// css
import './css/main.css';

// components
import Navbar from './components/layout/Navbar';
import MainWrapper from './components/layout/MainWrapper';

// service
import { getCSRFTokenService } from "./service/auth.services";

const App: FC = () => {

  const getCRSFToken = useCallback(
    getCSRFTokenService,
    [],
  );

  useEffect(() => {
    // const queryToAPI = async () => await getCRSFToken();
  
    // queryToAPI();
  }, [ getCRSFToken ]);
  
  return (
    <Router>
      <Navbar />

      <MainWrapper />
    </Router>
  );
};

export default App;
