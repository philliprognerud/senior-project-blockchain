// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

// ##############################
// // // general variables for charts
// #############################

const chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        scaleLabel: {
        display: true,
        labelString: 'Y text'
        },
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        },
        scaleLabel: {
        display: true,
        labelString: 'Y text'
        },
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  },
 legend: {
          display: true,
          position: 'bottom',
  }
  
};

function getGradientChartOptionsConfigurationWithNumbersAndGrid(yLabel, yUnit ){ 
  var gradientChartOptionsConfigurationWithNumbersAndGrid = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          },
          scaleLabel: {
            display: true,
            labelString: yLabel
         },
         ticks: {
              callback: function(value, index, values) {
                      return value + yUnit;
              },
          }
        }
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true
         }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  };
  return gradientChartOptionsConfigurationWithNumbersAndGrid
}

// ##############################
// // // Dashboard view - Panel chart
// #############################

const dashboardPanelChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY"
      ],
      datasets: [
        {
          label: "Data",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [29.4, 28.8, 30.1, 30.0, 29.6, 31.2, 28.4, 28.1, 28.6, 29.0, 28.1, 31.3]

        }
      ]
    };
  },
  options: {
    title: {
            display: true,
            text: 'Miles Per Gallon',
        },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: false,
            maxTicksLimit: 20,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

// ##############################
// // // Dashboard view - Shipped Products - Card
// #############################

const BatteryConsumption = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    return {
      labels: [
        "AC",
        "Heater",
        "Lights",
        "Sound System"
      ],
      datasets: [
        {
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: [
          "#DEB887",
          "#A9A9A9",
          "#DC143C",
          "#F4A460",       ],
            borderWidth: 2,
          data: [40,20,30,10]
        }
      ]
    };
  },
  options: gradientChartOptionsConfiguration
};

// ##############################
// // // Dashboard view - All Products - Card
// #############################

const TripDistance = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: ["Apr 21,", "Apr 22", "Apr 23", "Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28"],
      datasets: [
        {
          label: "Trip Stats",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [54102, 54140, 54160, 54165, 54201, 54210, 54221, 54230]
        }
      ]
    };
  },
  options: getGradientChartOptionsConfigurationWithNumbersAndGrid("TripSpeeds", "mi")
};

// ##############################
// // // Dashboard view - Bar Chart - Card
// #############################

const averageSpeed = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
        "Apr 21",
        "Apr 22",
        "Apr 23",
        "Apr 24",
        "Apr 25",
        "Apr 26",
        "Apr 27",
        "Apr 28"
      ],
      datasets: [
        {
          label: "Average Trip Speed",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,
          data: [45, 23, 54, 30, 63, 35, 38, 29]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};

const FuelChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#ffd133");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#ffd133", 0.4));
    return {
       labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "Fuel Stats",
          borderColor: "#ffd133",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#ffd133",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [1966.14, 2054.18, 2311.9, 2243.53, 2243.53, 2650.23, 2353.59, 2243.68, 2546.88, 2425.69, 2364.96, 2084.58]
        }
      ]
    };
  },
  options: getGradientChartOptionsConfigurationWithNumbersAndGrid("Fuel Cost $", "$")
};

const FuelUsageChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#ff5733");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#ff5733", 0.4));
    return {
       labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "Fuel Stats",
          borderColor: "#ff5733",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [466, 542, 610, 592, 567, 421, 621, 592, 672, 640, 624, 550]
        }
      ]
    };
  },
  options: getGradientChartOptionsConfigurationWithNumbersAndGrid("Fuel Used (Gallons)", "G")
};

const CarUsage = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    return {
      labels: [
        "Accelerating",
        "Braking",
        "Rolling",
      ],
      datasets: [
        {
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: [
          "#DEB887",
          "#A9A9A9",
          "#DC143C",       
          ],
            borderWidth: 2,
          data: [27,43,30]
        }
      ]
    };
  },
  options: gradientChartOptionsConfiguration
};

const TotalMilesDriven = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#ff5733");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#ff5733", 0.4));
    return {
       labels: [
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018"
      ],
      datasets: [
        {
          label: "Fuel Stats",
          borderColor: "#ff5733",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [10500, 11961, 7313, 10435, 11333, 9725, 8461, 7423]
        }
      ]
    };
  },
  options: getGradientChartOptionsConfigurationWithNumbersAndGrid("Miles Driven", "Mi")
};

const AverageMilesDriveLifeTime = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#ff5733");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#ff5733", 0.4));
    return {
       labels: [
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018"
      ],
      datasets: [
        {
          label: "Fuel Stats",
          borderColor: "#ff5733",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [40, 42, 43, 44, 42, 45, 40, 43]
        }
      ]
    };
  },
  options: getGradientChartOptionsConfigurationWithNumbersAndGrid("Average MPH", "MPH")
};



module.exports = {
  dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
  BatteryConsumption, // Chart for Dashboard view - Shipped Products Card
  TripDistance, // Chart for Dashboard view - All products Card
  averageSpeed, // Chart for Dashboard view - 24 Hours Performance Card
  FuelChart,
  CarUsage,
  FuelUsageChart,
  TotalMilesDriven,
  AverageMilesDriveLifeTime
};
