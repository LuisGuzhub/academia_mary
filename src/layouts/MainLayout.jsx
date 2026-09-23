import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { courses } from "../data/courses";
import { navigation, secondaryNavigation, site } from "../data/site";

export default function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const course = courses.find((item) => pathname === `/cursos/${item.slug}`);
    const title =
      course?.title ||
      [...navigation, ...secondaryNavigation].find(
        ([path]) => path === pathname,
      )?.[1] ||
      "Página no encontrada";
    document.title = `${title} · ${site.brandName}`;
    document.getElementById("contenido")?.focus({ preventScroll: true });
  }, [pathname]);
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
