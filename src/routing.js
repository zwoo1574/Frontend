import "bootstrap/dist/css";
import "bootstrap/dist/css/main.css"
import '.App/css'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import App from './App'


function App() {
    return (
      <div className="App">

        <BrowserRouter>
        <Routes>
          {/* click company */}
          <Route path='/' element = {<App>/</App>}/>
          {/* company main */}
          <Route path='/Main' element = {<Main>/</Main>}/>
          {/*company search page */}
          <Route path='/' element = {<App>/</App>}/>
          <Route path='/' element = {<App>/</App>}/>
        </Routes>
        </BrowserRouter>
        
      </div>
    );
  }