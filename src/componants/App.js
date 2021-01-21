import React, { useEffect} from 'react';
import { Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { AddBooks } from '../redux/action/BookActions'
import Home from './Home';
import BookDetails from './BookDetails';
import '../App.css';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector(state => state)

  useEffect(() => {
    dispatch(AddBooks());
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading ? "loading... " : isError ? "Error" :
        <Switch>
          <Route exact path='/'  >
            <Home />
          </Route>
          <Route exact path='/:id' > <BookDetails />
          </Route>
        </Switch>
      }
    </div>
  );
}

export default App;
