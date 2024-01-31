import { useState } from 'react'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import LobbyScreen from "./pages/Lobby";
import RoomPage from "./pages/Room";
import { SocketProvider } from "./context/SocketProvider";
import Dashboard from './pages/Dashboard';
import Summary from './pages/Summary';


function App() {

  return (
    // <SocketProvider>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/summary" element={<Summary />} />

        {/* <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} /> */}
        {/* <Route path="/room/:id" component={ChatRoom} />
        <Route path="/" component={CreateRoom} /> */}
      </Routes>
    // </SocketProvider>
  )
}

export default App
