import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Head from "./components/Head"
import BoardList from "./components/board/BoardList"
import BoardForm from "./components/board/BoardForm"
//npm install react-router-dom
function App() {
  return (
     <BrowserRouter>
     <Head/>
     <Routes>
        <Route path="/board/boardList/:boardid" element={<BoardList />} />
        <Route path="/board/boardForm/:boardid" element={<BoardForm />} />
     </Routes>
     </BrowserRouter>
  );
}
export default App;
