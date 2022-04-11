import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import useCars from "./hooks/useCars";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
export const CarContext = createContext()

function App() {
  const [cars, setCars] = useCars()
  return (
    <CarContext.Provider value={[cars, setCars]}>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </CarContext.Provider>
  );
}

export default App;
