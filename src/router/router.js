import RegisterPage from "../Pages/register/registerPage";
import LoginPage from "../Pages/login/login";
import EventsAttended from "../Pages/events/attended/eventsAttended";
import EventsAttending from "../Pages/events/attending/eventsAttending";
import Navbar from "../components/generic/Navbar";
import NavbarRegister from "../components/register-login/NavbarComponent";
import Footer from "../components/generic/Footer";
import Event from "../Pages/event/Event";
import Host from "../Pages/events/host/hostEvent";
import Profile from "../Pages/profile/profile";
import AboutUs from "../Pages/AboutUs/AboutUs";

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
    {
      path: "/event",
      main: Event,
    },
    {
      path: "/about",
      main: AboutUs,
    },
    {
      path: "/events/host",
      main: Host,
    },
    {
      path: "/profile",
      main: Profile,
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
