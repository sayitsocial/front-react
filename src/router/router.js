import Event from "../Pages/event/Event";
import EventsAttended from "../Pages/events/attended/eventsAttended";
import EventsAttending from "../Pages/events/attending/eventsAttending";
import Footer from "../components/generic/Footer";
import Host from "../Pages/events/host/hostEvent";
import Landing from "../Pages/landing/Landing";
import LoginPage from "../Pages/login/login";
import Navbar from "../components/generic/Navbar";
import NavbarRegister from "../components/register-login/NavbarComponent";
import Profile from "../Pages/profile/profile";
<<<<<<< HEAD
import RegisterPage from "../Pages/register/registerPage";
=======
import AboutUs from "../Pages/AboutUs/AboutUs";
>>>>>>> 268bbeeec739c413c0bb3fd83301cc4494140c52

function Routes () {
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
    {
      path: "/",
      main: Landing,
    },
  ];

  const routesNav = [
    {
      path: ["/register", "/login"],
      exact: true,
      topbar: NavbarRegister,
    },
    {
      path: ["/events", '/event', '/profile'],
      topbar: Navbar,
    },
  ];

  const routesFooter = [
    {
      path: ["/register", "/login",],
      exact: true,
      footer: () => <> </>,
    },
    {
      path: ['/'],
      footer: Footer,
    },
  ];

  return { routesMain, routesNav, routesFooter };
}

export default Routes;
