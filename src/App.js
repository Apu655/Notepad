import logo from './logo.svg';
import './App.css';
import {Navigate,Route,Routes} from "react-router-dom"
import { Header } from './components/Header';
import NotesListPage from './pages/NotesListPage';
import { NotePage } from './pages/NotePage';
import HomePage from './pages/HomePage';
//const body = {part:"This is a part"}
function App() {
  
  return (
    <div className="app">
      <Header/>
      <div className="container dark">

        
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          {/* <Route path="/" element={<Navigate to= "/notes"/>} /> */}
          <Route path="/notes" element={<NotesListPage/>}/>
          <Route path="/notes/:id" element={<NotePage/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
