"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // Main Template Color
    var brandPrimary = "#FFD700";

    // ------------------------------------------------------- //
    // Line Chart
    // ------------------------------------------------------ //
    /*var LINECHART = document.getElementById("lineCahrt");
    var myLineChart = new Chart(LINECHART, {
        type: "line",
        options: {
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(77, 193, 75, 0.4)",
                    borderColor: brandPrimary,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    borderWidth: 1,
                    pointBorderColor: brandPrimary,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [50, 20, 60, 31, 52, 22, 40],
                    spanGaps: false,
                },
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    borderWidth: 1,
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 30, 81, 46, 55, 30],
                    spanGaps: false,
                },
            ],
        },
    });*/ 

    // ------------------------------------------------------- //
    // Pie Chart
    // ------------------------------------------------------ //
    var PIECHART = document.getElementById("pieChart");
    var myPieChart = new Chart(PIECHART, {
        type: "doughnut",
        data: {
            labels: ["Iluminación", "Electrodomésticos","Climatización","Electrónica"],
            datasets: [
                {
                    data: [20,30,40,10],
                    borderWidth: [1, 1],
                    backgroundColor: [brandPrimary, "#27AE60","#2E86C1","#F39C12"],
                    hoverBackgroundColor: ["#0B4D67", "#0B4D67", "#0B4D67","#0B4D67"],
                },
            ],
        },
    });

    // ------------------------------------------------------- //
});
