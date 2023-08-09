import "bootstrap/dist/css";
import "bootstrap/dist/css/main.css"
import '.App/css'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import App from '../src/App'
import Start from "./page/start"
import Main from ''


function routing() {
    return (
      <div className=""> 


          <BrowserRouter>
            <Routes>
                  <Route path='main' element={<Main/>}></Route>
                  <Route path="start" element={<Start/>}></Route>
            </Routes>
          </BrowserRouter>
      </div>
    );
  }
  export default routing;