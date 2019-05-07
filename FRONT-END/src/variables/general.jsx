// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
  {
    checked: false,
    text: 'Reduce many short trips.Improves Car Battery '
  },
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Name", "Country", "City", "Salary"];
const tbody = [
  {
    className: "table-success",
    data: ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"]
  },
  {
    className: "",
    data: ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"]
  },
  {
    className: "table-info",
    data: ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"]
  },
  {
    className: "",
    data: ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"]
  },
  {
    className: "table-danger",
    data: ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"]
  },
  { className: "", data: ["Mason Porter", "Chile", "Gloucester", "$78,615"] },
  {
    className: "table-warning",
    data: ["Jon Porter", "Portugal", "Gloucester", "$98,615"]
  }
];

const FuelUsageInfo = " Users can see what percentage of time they step of the brakes, accerlerate or do not step on any pedal. Reducing the the amount of time the of pedal reduces fuel consumption ";
const OdometerInfo = " Users can see how much mileage was used on a single trip. It could be helpful to find different routes to the same destination to reduce trip mileage";
const TripSpeedsInfo = "Users can see how fast they go on an average trip. Users can look to see routes that can increase the speed";
const MonthlyFuelCostInfo = "Users can see how much they spend each month. Users can look to see periods where gas prices spike";
const FuelUsedMonthly = "Users can see how much fuel that was consumed monthly"
const BatteryUsed = "Users can see the battery usage of portions of the car. Users can reduce monitor the battery of their car"



// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { tasks, thead, tbody,FuelUsageInfo, OdometerInfo, TripSpeedsInfo, MonthlyFuelCostInfo,FuelUsedMonthly, BatteryUsed   };
