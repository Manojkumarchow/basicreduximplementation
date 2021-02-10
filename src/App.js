import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index';
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      Count: {counter}
      <hr/>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(5))}>Decrement</button>
    </div>
  );
}

export default App;
