import NavBar from "../../components/navbar"
import { Route, Routes } from "react-router-dom";
import FreeShipProductPage from "../FreeShipProductPage";
import BrandProductPage from "../BrandProductPage";
import NewProductPage from "../NewProductPage";
import SaleProductPage from "../SaleProductPage";

const App = (props) => {
  return (
   <>
    <NavBar/>
    <Routes >
      <Route path="/freeship" component={FreeShipProductPage} />
      <Route path="/brand" component={BrandProductPage} />
      <Route path="/new" component={NewProductPage} />
      <Route path="/sale" component={SaleProductPage} />
    </Routes>
  
   </>
  );
}

export default App;
