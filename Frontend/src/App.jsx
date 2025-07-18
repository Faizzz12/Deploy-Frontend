// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from './components/Experience';
import Organization from './components/Organization';
import Activity from './components/Activity';
import Contact from './components/Contact';
import Article from './components/Article.jsx';
import ArticleDetail from './components/ArticleDetail.jsx';
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Organization />
      <Activity />
    </>
  );
}

function App() {
  const location = useLocation();

  // Sembunyikan navbar di halaman admin
  const hideNavbarRoutes = ["/admin/login", "/admin/dashboard"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="font-sans">
      {shouldShowNavbar && <Navbar />}

      <Routes>
        {/* Halaman Publik */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<ArticleDetail />} />

        {/* Halaman Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
