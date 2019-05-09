import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import LandingPage from "../pages/LandingPage"
import Chart from "views/Chart/Chart.js";


var indexRoutes = [
    { path: "/dashboard", name: "Dashboard", component: Dashboard },
    { path: "/", name: "Home", component: LandingPage },
    { path: "/chart", name: "Chart", component: Chart}
];

export default indexRoutes;
