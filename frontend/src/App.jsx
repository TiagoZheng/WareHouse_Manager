import Inventory from "./components/Inventory";
import SideBarMenu from "./components/SideBarMenu";
import TopBar from "./components/TopBar";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="flex h-screen">
      <SideBarMenu />

      <div className="flex-1 flex-col flex">
        <TopBar />

        <div className="flex-1 flex bg-amber-800 align-middle justify-center">
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
