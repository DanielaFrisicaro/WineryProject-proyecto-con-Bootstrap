/* globals Chart:false, feather:false */

(() => {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'EEUU',
        'Reino Unido',
        'Canadá',
        'Brasil',
        'China',
        'México',
        'Paraguay',
        'Paises Bajos',
        'Alemania',
        'Perú',
        'Otros'


      ],
      datasets: [{
        data: [
          20.09,
          18.6,
          9.0,
          8.6,
          7.0,
          4.1,
          3.9,
          2.2,
          2.2,
          1.8,
          21.6
        ],
        lineTension: 0,
        backgroundColor: 'warning',
        borderColor: '#ad2f48',
        borderWidth: 4,
        pointBackgroundColor: '#ad2f48'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
