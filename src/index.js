import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Counter from './Counter';
import ProductList from './ProductList';
import rootReducer from './rootReducer';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk));

const App = () => (
  <div>
    <Provider store={store} >
      <Counter />
      <ProductList/>
    </Provider>

  </div>
);

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
