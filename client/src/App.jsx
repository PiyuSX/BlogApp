import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./Components/scrolltotop";
import OtherLayout from "./Layout/OtherLayout";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/all-blogs" element={<Blogs />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
