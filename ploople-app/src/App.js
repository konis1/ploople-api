import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import CreateEventStep1 from "./pages/create-event-step1"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-event-step1" element={<CreateEventStep1/>}/>
      </Routes>
    </>
  );
};
