import Inventory from "./components/Inventory";
import SideBarMenu from "./components/SideBarMenu";
import TopBar from "./components/TopBar";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="flex h-screen bg-amber-400">
      <SideBarMenu />

      <div className="flex-1 flex-col flex">
        <TopBar />

        <div className="flex-1 flex bg-gray-100">
          <Inventory />
        </div>
      </div>
      {/*  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
       */}
    </div>
  );
}
