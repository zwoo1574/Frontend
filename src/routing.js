import { BrowserRouter , Routes , Route} from "react-router-dom"
import Start from "./page/start"
import Main from './page/main'


function routing() {
    return (
      <div className="ldex.js">
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