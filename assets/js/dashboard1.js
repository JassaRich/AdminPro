// -------------------------------------------------------------------------------------------------------------------------------------------
// Dashboard 1 : Chart Init Js
// -------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {

  //=====================================
  // Theme Onload Toast
  //=====================================
  window.addEventListener("load", () => {
    let myAlert = document.querySelectorAll('.toast')[0];
    if (myAlert) {
      let bsAlert = new bootstrap.Toast(myAlert);
      bsAlert.show();
    }
  })

  // -----------------------------------------------------------------------
  // Sales overview
  // -----------------------------------------------------------------------

  var options_Sales_Overview = {
    series: [
      {
        name: "Earning ",
        data: [0, 150, 110, 240, 200, 200, 300, 200, 380, 300, 400, 380],
      },
      {
        name: "Expense ",
        data: [0, 100, 70, 100, 240, 180, 220, 140, 250, 210, 340, 320],
      },
      {
        name: "Sales ",
        data: [0, 50, 30, 60, 180, 120, 180, 80, 190, 150, 240, 240],
      },
    ],
    chart: {
      height: 345,
      type: "area",
      stacked: true,
      fontFamily: "inherit",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#e9edf2", "var(--bs-primary)", "var(--bs-info)"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    fill: {
      type: "solid",
      colors: ["#e9edf2", "var(--bs-primary)", "var(--bs-info)"],
      opacity: 1,
    },
    markers: {
      size: 3,
      strokeColors: "#fff",
      strokeWidth: 0,
      colors: ["#e9edf2", "var(--bs-primary)", "var(--bs-info)"],
    },
    grid: {
      borderColor: "rgba(0,0,0,.1)",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
    },
  };

  var chart_line_overview = new ApexCharts(
    document.querySelector("#Sales-Overview"),
    options_Sales_Overview
  );
  chart_line_overview.render();

  // -----------------------------------------------------------------------
  // Visitor
  // -----------------------------------------------------------------------

  var option_Visit_Separation = {
    series: [50, 40, 30, 10],
    labels: ["Mobile", "Tablet", "Other", "Desktop"],
    chart: {
      type: "donut",
      fontFamily: "inherit",
      height: 225,
      offsetY: 30,
      width: "100%",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          size: "80",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 10,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              color: "#000",
              fontFamily: "inherit",
              fontSize: "26px",
              fontWeight: 600,
              label: "Visits",
            },
          },
        },
      },
    },
    colors: ["var(--bs-primary)", "#26c6da", "#eceff1", "var(--bs-info)"],
    tooltip: {
      show: true,
      fillSeriesColor: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 1025,
        options: {
          chart: {
            height: 220,
            width: 220,
          },
        },
      },
      {
        breakpoint: 769,
        options: {
          chart: {
            height: 250,
            width: 250,
          },
        },
      },
    ],
  };

  var chart_pie_donut_status = new ApexCharts(
    document.querySelector("#Visit-Separation"),
    option_Visit_Separation
  );
  chart_pie_donut_status.render();

  // -----------------------------------------------------------------------
  // Website Visitor
  // -----------------------------------------------------------------------

  var option_Website_visit = {
    series: [
      {
        name: "Series A View ",
        data: [29, 52, 38, 47, 56, 41, 46, 21, 15, 30],
      },
      {
        name: "Series B View ",
        data: [12, 15, 45, 20, 12, 45, 65, 19, 32, 50],
      },
    ],
    chart: {
      fontFamily: "inherit",
      height: 400,
      type: "bar",
      stacked: true,
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
    },
    colors: ["var(--bs-success)", "var(--bs-primary)"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "20%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      min: -5,
      max: 5,
      title: {},
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      categories: [
        "16/08",
        "17/08",
        "18/08",
        "19/08",
        "20/08",
        "21/08",
        "22/08",
        "23/08",
        "24/08",
        "25/08",
      ],
    },
    yaxis: {
      tickAmount: 4,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
      theme: "dark",
    },
    legend: {
      show: false,
    },
  };

  var chart_area_spline = new ApexCharts(
    document.querySelector("#Website-Visit"),
    option_Website_visit
  );
  chart_area_spline.render();

});
