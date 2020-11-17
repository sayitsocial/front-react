import RegisterPage from "../Pages/register/registerPage";
import EventsAttended from "../Pages/events/attended/eventsAttended";
import EventsAttending from "../Pages/events/attending/eventsAttending";
import Navbar from "../components/generic/Navbar";
import NavbarRegister from "../components/register/NavbarComponent";
import Footer from "../components/generic/Footer";

function Routes() {
  const routesMain = [
    {
      path: "/register",
      main: RegisterPage,
    },
    {
      path: "/events/attended",
      main: EventsAttended,
    },
    {
      path: "/events/attending",
      main: EventsAttending,
    },
  ];

  const routesNav = [
    {
      path: "/register",
      exact: true,
      topbar: NavbarRegister,
    },
    {
      path: "/",
      topbar: Navbar,
    },
  ];

  const routesFooter = [
    {
      path: "/register",
      exact: true,
      footer: () => <> </>,
    },
    {
      path: "/",
      footer: Footer,
    },
  ];

  return { routesMain, routesNav, routesFooter };
}

export default Routes;
