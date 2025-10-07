import { Routes, Route } from "react-router-dom";
import { Menubar } from "./components/Menubar";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { ManageCategory } from "./pages/ManageCategory/ManageCategory";
import { ManageUsers } from "./pages/ManageUsers/ManageUsers";
import { Explore } from "./pages/Explore/Explore";
import { ManageItems } from "./pages/ManageItems/ManageItems";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Menubar />
      <Toaster/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<ManageCategory />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/items" element={<ManageItems />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
};
export default App;
