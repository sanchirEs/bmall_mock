import NavBar from "../../components/navbar";
import { Route, Routes } from "react-router-dom";
import FreeShipProductPage from "../FreeShipProductPage";
import BrandProductPage from "../BrandProductPage";
import NewProductPage from "../NewProductPage";
import SaleProductPage from "../SaleProductPage";
import HomePage from "../HomePage";
import Footer from "../../components/footer/footer";
import css from "./style.module.css"


const App = (props) => {
  return (
    <div className={css.Body}>
      <NavBar />
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/freeship" element={<FreeShipProductPage />} />
        <Route path="/brand" element={<BrandProductPage />} />
        <Route path="/new" element={<NewProductPage />} />
        <Route path="/sale" element={<SaleProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
