import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainDashboard from './components/MainDashboard';
import WorkplaceContext from './components/contexts/WorkplaceContext';
import { WorkPlace } from './components/models/WorkPlace';

function App() {
  return (
    <div className="App bg-black w-screen h-screen">
      <WorkplaceContext.Provider value={{workplace:new WorkPlace("","")}}>
      <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage></WelcomePage>}/>
        <Route path='/dashboard' element={<MainDashboard></MainDashboard>}/>
      </Routes>
      </BrowserRouter>
      </WorkplaceContext.Provider>
    </div>
  );
}

export default App;
