import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import FacilitatorsPage from "./pages/FacilitatorsPage";
import LocationPage from "./pages/LocationPage";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./sections/About";
import Instructors from "./sections/Instructors";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cursos" element={<CoursesPage />} />
          <Route path="cursos/:slug" element={<CourseDetailPage />} />
          <Route path="nosotros" element={<About />} />
          <Route path="instructores" element={<Instructors />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="facilitadores" element={<FacilitatorsPage />} />
          <Route path="ubicacion" element={<LocationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
