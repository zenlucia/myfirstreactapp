//import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat';
import Dog from './components/Dog';
//import ButtonNew from './components/Mybutton';
import Button from "./components/Button.js";

function App() {
  const cssStyles={
    backgroundColor: 'powderblue'
  }
  return (
    <div className="App">
      
      <header className="App-header" style={cssStyles}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <p>
          Hello this is my first React app
        </p>
        <div>
          <div className="flex">
            <Cat color="#fc9803" name="Taylor" lackOfCommonSense={true} />
            <Cat color="#544c3f" name="Lilly" lackOfCommonSense={false} />
            <Cat color="#f5f1eb" name="Tom" lackOfCommonSense={true} />
          </div>
          <br />
          <div className="flex">
            <Dog color="#0a0a0a" name="Jack"  personality="naughty" />
            <Dog color="#faf5f5" name="Minnie"  personality="sweet" />
            <Dog color="#8c5b0b" name="Sammy"   personality="playful" />
          </div>
        </div>
        <button>Change Color</button>
      </header>
    </div>
  );
}

export default App;

/**<div className="flex">
          <Cat color="#eb9534" name="Tabitha" lackOfCommonSense={true} />
          <Cat colour="#f2f2d0" name="Mog"  lackOfCommonSense={false} />
          <Cat colour="#f2e2d0" name="Sam"  lackOfCommonSense={true} />
        </div>
        <Dog name="Fido" color="#472907" dogYears={4} /> */





