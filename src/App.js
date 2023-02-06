import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { LoginPage } from "./pages";
import { ProductsPage } from "./pages";


// let zoom = document.querySelector('.suggest-img');
// let imgzoom = document.querySelector('.img-zoom');
// zoom.addEventListener('mousemove',(e) =>{
//   imgzoom.style.opacity = 1;
//   let positionPx = e.x - zoom.getBoundingClientRect().left;
//   let positionX = (positionPx / zoom.offsetWidth) * 100;

//   let positionPy = e.y - zoom.getBoundingClientRect().top;
//   let positionY = (positionPy / zoom.offsetHeight) * 100;

//   imgzoom.style.setProperty('--zoom-x', positionX + '%');
//   imgzoom.style.setProperty('--zoom-y', positionY + '%');
// });
//   zoom.addEventListener('mouseout',(e) =>{
//   imgzoom.style.opacity = 0;
// });


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
