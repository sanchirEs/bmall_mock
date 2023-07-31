import NavBar from "../../components/navbar";
import { Route, Routes } from "react-router-dom";
import FreeShipProductPage from "../FreeShipProductPage";
import BrandProductPage from "../BrandProductPage";
import NewProductPage from "../NewProductPage";
import SaleProductPage from "../SaleProductPage";


const App = (props) => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/freeship" element={<FreeShipProductPage />} />
        <Route path="/brand" element={<BrandProductPage />} />
        <Route path="/new" element={<NewProductPage />} />
        <Route path="/sale" element={<SaleProductPage />} />
      </Routes>
    </>
  );
};

export default App;
