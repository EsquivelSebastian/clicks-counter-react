import './App.css';
import freeCodeCampLogo from "../src/images/logo.png";
import Button from './components/button';

function App() {

  const controlClick = () =>{
    console.log("click")
  }

  const resetCounter= () =>{
    console.log("Reiniciar")
  }
  return (
    <div className="App">
    <div className="logo-container">
    <img 
    className="logo"
    src={freeCodeCampLogo}
    alt="logo de freecodecamp"
     />
     </div>
     <div className='main-container' >
      <Button 
      text="Click"
      bttnClick={true}
      controlClick={controlClick}
      />

      <Button
            text="Reset"
            bttnClick={false}
            controlClick={resetCounter} />

     </div>
    </div>  
   
  );
}

export default App;
