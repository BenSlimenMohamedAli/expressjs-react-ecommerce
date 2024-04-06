import { Outlet, Link } from "react-router-dom";

function Default() {
  return (
    <section>
      This is header
      <Outlet />
    </section>
  );
}

export default Default;
