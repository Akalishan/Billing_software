import { Routes, Route, useLocation } from "react-router-dom";
import { Menubar } from "./components/Menubar";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { ManageCategory } from "./pages/ManageCategory/ManageCategory";
import { ManageUsers } from "./pages/ManageUsers/ManageUsers";
import { Explore } from "./pages/Explore/Explore";
import { ManageItems } from "./pages/ManageItems/ManageItems";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/login";
import { OrderHistory } from "./components/OrderHistory";
import { useContext } from "react";
import { AppContext } from "./context/AppContext.jsx";
import { Navigate } from "react-router-dom";
const App = () => {
  const location = useLocation();
  const { auth } = useContext(AppContext);
  const LoginRoute = ({ element }) => {
    if (auth.token) {
      return <Navigate to="/dashboard" />;
    }
    return element;
  };

  const protectedRoute = ({ element, allowedRoles }) => {
    if (!auth.token) {
      return <Navigate to="/login" />;
    }
    if (allowedRoles && !allowedRoles.includes(auth.role)) {
      return <Navigate to="/dashboard" replace />;
    }
    return element;
  };
  return (
    <div>
      {location.pathname !== "/login" && <Menubar />}
      <Toaster />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        {/*These are the admin only routes */}
        <Route path="/category" element={<protectedRoute element={<ManageCategory />} allowedRoles={["admin"]} />} />
        <Route path="/users" element={<protectedRoute element={<ManageUsers />} allowedRoles={["admin"]} />} />
        <Route path="/items" element={<protectedRoute element={<ManageItems />} allowedRoles={["admin"]} />} />

        <Route path="/login" element={<LoginRoute element={<Login/>} />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
