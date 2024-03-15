
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Store from './utils/Store';



function App() {

  return (
    <div className="">
      <Provider store={Store}><Body /></Provider>
    </div>
  );
}

export default App;
