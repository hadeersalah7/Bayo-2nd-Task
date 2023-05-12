import './App.css';
import Nav from './components/Nav'; 
import Wrapper from './components/Wrapper';
function App() {
  return (
    <div className="App">
    <Nav />
    <div className='container header-container'>
    <h3 id="welcome">Welcome Tim</h3>
    <p id="collection">In The Collection Below You Can Find And Download All Available Documents For Your Client.</p>
    </div>
    <Wrapper />
    </div>
  );
}

export default App;
