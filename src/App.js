import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import reduxStore from './Redux/ReduxStore';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={reduxStore}>
    <div className="App">      
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>      
    </div>
    </Provider>
  );
}

export default App;
