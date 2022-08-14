import { FC, useEffect, useCallback } from 'react';

// css
import './App.css';

// redux
import { useAppDispatch } from "./hooks/redux.hooks";

// actions
import { loginAction } from "./redux/actions/auth.actions";

const App: FC = () => {

  const dispatch = useAppDispatch();
  // const { loading } = useAppSelector(state => state.user);
  const login = useCallback(
    () => { dispatch( loginAction() )},
    [dispatch]
  );
  

  useEffect(() =>{
    const fetchData = () => login();
    fetchData();
  }, [login])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
