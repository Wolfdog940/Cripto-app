import CriptoCoins from "./componentes/CriptoCoins";
import Navbar from "./componentes/Navbar";
import AutoComplete from "./componentes/AutoComplete";
//redux
import { Provider } from "react-redux";
import store from "./store";
//routes
import { BrowserRouter ,Route ,Routes } from "react-router-dom"
import InfoCoin from "./componentes/InfoCoin";



function App() {
  return (
  
  <BrowserRouter>
    <Provider store={store}>
      <Navbar/>
      <AutoComplete/>
        <Routes>
          <Route path="/" element={<CriptoCoins/>}/>
          <Route path="/coins/:id" element={<InfoCoin/>}/>
        </Routes>
      
    </Provider>
  </BrowserRouter>
    
    
  );
}

export default App;
