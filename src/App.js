import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import reduxStore from './Redux/ReduxStore'

function App() {
  return (
    <Provider store={reduxStore}>
    <div className="App">
      <CakeContainer/>
      
    </div>
    </Provider>
  );
}

export default App;
