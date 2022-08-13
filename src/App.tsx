import { FC, useEffect } from 'react';

// css
import './App.css';

// redux
import { useAppDispatch } from "./hooks/redux.hooks";

// actions
import { loginAction } from "./redux/actions/auth.actions";

const App: FC = () => {

  const dispatch = useAppDispatch();

  useEffect(() =>{
    dispatch( loginAction() );
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
