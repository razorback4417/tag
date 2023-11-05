import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Explore0 from "./pages/Explore0";
import SampleProfile from "./pages/SampleProfile";
import Explore2 from "./pages/Explore2";
import Explore1 from "./pages/Explore1";
import Explore21 from "./pages/Explore21";
import Closer1 from "./pages/Closer1";
import Explore11 from "./pages/Explore11";
import Post2 from "./pages/Post2";
import Post1 from "./pages/Post1";
import MyProfile from "./pages/MyProfile";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sample-profile":
        title = "";
        metaDescription = "";
        break;
      case "/explore-2":
        title = "";
        metaDescription = "";
        break;
      case "/explore-11":
        title = "";
        metaDescription = "";
        break;
      case "/explore-21":
        title = "";
        metaDescription = "";
        break;
      case "/closer-1":
        title = "";
        metaDescription = "";
        break;
      case "/explore-1":
        title = "";
        metaDescription = "";
        break;
      case "/post-2":
        title = "";
        metaDescription = "";
        break;
      case "/post-1":
        title = "";
        metaDescription = "";
        break;
      case "/my-profile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Explore0 />} />
      <Route path="/sample-profile" element={<SampleProfile />} />
      <Route path="/explore-2" element={<Explore2 />} />
      <Route path="/explore-11" element={<Explore1 />} />
      <Route path="/explore-21" element={<Explore21 />} />
      <Route path="/closer-1" element={<Closer1 />} />
      <Route path="/explore-1" element={<Explore11 />} />
      <Route path="/post-2" element={<Post2 />} />
      <Route path="/post-1" element={<Post1 />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  );
}
export default App;
