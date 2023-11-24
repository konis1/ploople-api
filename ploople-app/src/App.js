import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import CreateEvent from './pages/create-event';
import Confirmation from './pages/confirmation';
import Dashboard from './pages/dashboard';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-event-step1" element={<CreateEvent/>}/>
        <Route path="/confirmation" element={<Confirmation/>}/>
        <Route path="/my-dashboard" element={<Dashboard/>}/>
      </Routes>
  );
};
