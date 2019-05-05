import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import CarHistory from "views/CarHistory.js";
import Chart from "views/Chart/Chart.js";
import YourCar from "views/YourCar/YourCar.js";


var dashRoutes = [
  {
    path: "/dashboard/home",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  },
  {
    path: "/dashboard/car-history",
    name: "All-Time Car History",
    icon: "tech_watch-time",
    component: Notifications
  },
  {
    path: "/dashboard/yourcar",
    name: "Your Car",
    icon: "travel_info",
    component: YourCar
  },
  // {
  //   path: "/dashboard/chart",
  //   name: "Chart",
  //   component: Chart
  // },
  {
    path: "/dashboard/order",
    name: "Order Device",
    icon: "tech_mobile",
    component: Chart
  }
];
export default dashRoutes;
