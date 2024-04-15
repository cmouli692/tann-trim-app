import Header from "./components/Header"
import BagsLabelsAndLogos from "./components/BagsLabelsAndLogos";
import Products from "./components/Products"

import './App.css';

function App() {
   // write your code from products function create cards
  return (
    <div className="app">
      <Header/>
      <BagsLabelsAndLogos/>
      <Products/>
    </div>
  );
}

export default App;
