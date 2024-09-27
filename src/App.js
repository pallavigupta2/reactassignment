
import { Provider } from 'react-redux';
import './App.css';
import TableContainer from './components/TableContainer';
import appStore from './utils/store';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <TableContainer/>
    </div>
    </Provider>
  );
}

export default App;
