import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

function Default() {
  return (
    <section>
      <Outlet />
      <Footer />
    </section>
  );
}

export default Default;
