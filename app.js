function drawLineGraph(divID, labels, datasets) {
    var ctx = document.getElementById(divID).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {}
    });
}

function drawBarGraph(divID, barChartData) {
    var ctx = document.getElementById(divID).getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}


function getColour(indx) {
  var colours = ["rgb(121,106,238,0.6)", "rgb(84,230,157,0.6)", "rgb(255,195,109,0.6)", "rgb(255,173,173,0.6)", "rgb(174,199,159,0.6)", "rgb(253,214,147,0.6)"]
  if (indx <= colours.length) {
    return colours[indx]
  } else {
    // Random colour
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }
}



function dayLabels() {
    return [
          "00:00", "00:30",
          "01:00", "01:30",
          "02:00", "02:30",
          "03:00", "03:30",
          "04:00", "04:30",
          "05:00", "05:30",
          "06:00", "06:30",
          "07:00", "07:30",
          "08:00", "08:30",
          "09:00", "09:30",
          "10:00", "10:30",
          "11:00", "11:30",
          "12:00", "12:30",
          "13:00", "13:30",
          "14:00", "14:30",
          "15:00", "15:30",
          "16:00", "16:30",
          "17:00", "17:30",
          "18:00", "18:30",
          "19:00", "19:30",
          "20:00", "20:30",
          "21:00", "21:30",
          "22:00", "22:30",
          "23:00", "23:30",
        ];
}

function drawCarbonGraph(div, labels, title, data, lineColour) {
var legendState = true;
    if ($(window).outerWidth() < 576) {
        legendState = false;
    }

    var CHART = $(div);

    var myLineChart = new Chart(CHART, {
        type: 'line',
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: true
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                display: legendState
            }
        },
        data: {
            labels: labels,
            datasets: [
                {
                    label: title,
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: lineColour,
                    pointHoverBackgroundColor: lineColour,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: lineColour,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: data,
                    spanGaps: false
                }
            ]
        }
    });
}

window.getColour = getColour
window.dayLabels = dayLabels
window.drawCarbonGraph = drawCarbonGraph
window.drawLineGraph = drawLineGraph
window.drawBarGraph = drawBarGraph

/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

        // ------------------------------------------------------- //
        // Sidebar Functionality
        // ------------------------------------------------------ //
        $('#toggle-btn').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');

            $('.side-navbar').toggleClass('shrinked');
            $('.content-inner').toggleClass('active');
            $(document).trigger('sidebarChanged');

            if ($(window).outerWidth() > 1183) {
                if ($('#toggle-btn').hasClass('active')) {
                    $('.navbar-header .brand-small').hide();
                    $('.navbar-header .brand-big').show();
                } else {
                    $('.navbar-header .brand-small').show();
                    $('.navbar-header .brand-big').hide();
                }
            }

            if ($(window).outerWidth() < 1183) {
                $('.navbar-header .brand-small').show();
            }
        });


});
