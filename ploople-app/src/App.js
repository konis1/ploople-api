import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import CreateEventStep1 from "./pages/create-event-step1"
import CreateEventStep2 from "./pages/create-event-step2"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-event-step1" element={<CreateEventStep1/>}/>
        <Route path="/create-event-step2" element={<CreateEventStep2/>}/>
      </Routes>
    </>
  );
};
