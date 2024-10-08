import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import Signin from './components/Signin'
import Appbar from './components/Appbar'
import {Home, Error} from './components/Home'
import Show from './components/Show';


function App({store}) {

  function Page() {
    switch(store.getState()){
      case "Signin":
        return (<div> <Appbar store={store} /> <Signin /> </div>)
      case "Signup":
        return (<div> <Appbar store={store} /> <Signup /> </div>)
      case "Home":
        return (<div> <Appbar store={store} /> <Home /> </div>)
      case "Show":
        return (<div> <Appbar store={store} /> <Show /> </div>)  
      default:
        return (<div> <Appbar store={store} /> {Error()} </div>)
        
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Student Health And WellNess</p>
      </header>
      <div className='App-body'>
        <Page />
      </div>
    </div>
  );
}

export default App;
