import { BrowserRouter , Routes , Route} from "react-router-dom"
import Start from "./page/start"
import Main from './page/main'


function routing() {
    return (
      <div >
          <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Start/>}></Route>
                  <Route path='main' element={<Main/>}></Route>
            </Routes>
          </BrowserRouter>
      </div>
    );
  }
  export default routing;