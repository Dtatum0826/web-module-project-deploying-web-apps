import logo from './logo.svg';
import './App.css';
import dragonsImage from './Images/dragonsImage.jpg'
import fairyImage from './Images/fairyImage.jpg'
import  princessImage from'./Images/princessImage.jpg'
function App() {
  return (
    <div className="App">
     <div>
      <h1>For Bunny</h1>
      <img src={fairyImage} alt ="Fairy in secret tree house"/>
     </div>
     <div>
      <h1>For Claire</h1>
      <img src={dragonsImage} alt ="Drgons circling in flight"/>
     </div>
     <div>
      <h1>For Violet</h1>
      <img src={princessImage} alt ="Princess and unicorn"/>
     </div>
    </div>
  );
}

export default App;
