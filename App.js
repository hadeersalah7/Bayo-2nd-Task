import './App.css';
import Nav from './components/Nav'; 
import Wrapper from './components/Wrapper';
function App() {
  return (
    <div className="App">
    <Nav />
    <div className='container header-container'>
    <h3 id="welcome">Welcome Tim</h3>
    <p id="collection">In the collection below you can find and download all available documents for your client.</p>
    </div>
    <Wrapper />
    </div>
  );
}






export default App;
