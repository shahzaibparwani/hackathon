import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from "./pages/Layout";
import Home from "./App";
import Admin from "./pages/admin/admin";
import Feeds from "./pages/feeds/feeds";
import Login from "./pages/loginsignup/login";
import Course from "./pages/courses/course";
import Form from "./pages/form/form";
import Signup from "./pages/loginsignup/signup";
import { AuthProvider } from "./pages/loginsignup/auth";
import StdDashboard from "./pages/student/dashboard";




export default function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="admin" element={<Admin />} />
          <Route path="dashboard" element={<StdDashboard />} />
          <Route path="feeds" element={<Feeds />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="course" element={<Course />} />
          <Route path="form" element={<Form />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);