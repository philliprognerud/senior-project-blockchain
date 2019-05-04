import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import CarHistory from "views/CarHistory.js";
import Chart from "views/Chart/Chart.js";
import YourCar from "views/YourCar/YourCar.js";


var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  },
  {
    path: "/car-history",
    name: "All-Time Car History",
    icon: "tech_watch-time",
    component: Notifications
  },
  {
    path: "/yourcar",
    name: "Your Car",
    icon: "tech_watch-time",
    component: YourCar
  },
  {
    path: "/chart",
    name: "Chart",
    component: Chart
  }
];
export default dashRoutes;
