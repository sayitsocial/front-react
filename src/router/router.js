import RegisterPage from "../Pages/register/registerPage";
import LoginPage from "../Pages/login/login";
import EventsAttended from "../Pages/events/attended/eventsAttended";
import EventsAttending from "../Pages/events/attending/eventsAttending";
import Navbar from "../components/generic/Navbar";
import NavbarRegister from "../components/register-login/NavbarComponent";
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
    {
      path: "/login",
      main: LoginPage,
    },
  ];

  const routesNav = [
    {
      path: ["/register", "/login"],
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
      path: ["/register", "/login"],
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
