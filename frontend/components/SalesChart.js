import React from 'react'
import { Bar } from 'react-chartjs-2'

class SalesChart extends React.Component {
  state = {
    chartOptions: {
      legend: {
        position: 'bottom',
        display: false
      },
      tooltips: {
        backgroundColor: '#000',
        titleFontColor: '#fff',
        bodyFontColor: '#fff',
        footerFontColor: '#fff'
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: 'rgba(0,0,0,0.5)',
              fontStyle: 'bold',
              beginAtZero: true,
              maxTicksLimit: 0,
              padding: 0,
              display: false
            },
            gridLines: {
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }
        ],
        xAxes: [
          {
            // barThickness : 15,
            // categoryThickness: 0.9,
            barPercentage: 1,
            display: false
          },
          {
            gridLines: {
              zeroLineColor: 'transparent',
              display: false,
              drawBorder: false
            },
            ticks: {
              padding: 0,
              fontColor: 'rgba(0,0,0,0.5)',
              fontStyle: 'bold',
              display: false
            }
          }
        ]
      }
    }
  }

  data = canvas => {
    var ctx = canvas.getContext('2d')

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0)
    gradientStroke.addColorStop(1, '#55bbe9')
    gradientStroke.addColorStop(0.8, '#5597e9')
    gradientStroke.addColorStop(0.6, '#5d55e9')
    gradientStroke.addColorStop(0.4, '#8a55ea')
    gradientStroke.addColorStop(0.2, '#a757e9')
    gradientStroke.addColorStop(0, '#d256e9')

    return {
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30'
      ],
      datasets: [
        {
          label: this.props.chartTitle,
          borderColor: gradientStroke,
          pointRadius: 0,
          fill: true,
          backgroundColor: gradientStroke,
          borderWidth: 1,
          data: [
            60,
            65,
            35,
            20,
            15,
            65,
            90,
            50,
            85,
            60,
            25,
            50,
            70,
            20,
            100,
            40,
            80,
            85,
            60,
            35,
            40,
            55,
            90,
            10,
            75,
            80,
            50,
            30,
            10
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="chart">
        <h3 className="bold">{this.props.chartTitle}</h3>
        <Bar
          className="sales-chart"
          data={this.data}
          options={this.state.chartOptions}
        />
      </div>
    )
  }
}

export default SalesChart
