import './bootstrap.min.css';
import './App.css';
import Byzantine from './Byzantine';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Byzantine />
    </Provider>
  );
}

export default App;
