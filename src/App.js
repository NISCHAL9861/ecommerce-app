import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import {} from "react-dom";

function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/">
    //         <Header />
    //         <Home />
    //       </Route>
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Header />} />
          </Route>
        </Routes>
        <Home />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
