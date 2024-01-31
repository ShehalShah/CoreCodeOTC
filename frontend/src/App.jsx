import { useState } from 'react'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import LobbyScreen from "./pages/Lobby";
import RoomPage from "./pages/Room";
import { SocketProvider } from "./context/SocketProvider";

function App() {

  return (
    <SocketProvider>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </SocketProvider>
  )
}

export default App
