import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import LandingPage from "../pages/LandingPage"

var indexRoutes = [
    { path: "/dashboard", name: "Dashboard", component: Dashboard },
    { path: "/", name: "Home", component: LandingPage }
];

export default indexRoutes;
