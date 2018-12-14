import React from 'react'
import SalesChart from './SalesChart'
import Orders from './Orders'

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="charts">
          <SalesChart chartTitle="Sales" />
          <SalesChart chartTitle="Traffic" />
        </div>
        <div className="mt-50">
          <h3 className="bold">Orders</h3>
          <Orders className="full-page" />
        </div>
      </>
    )
  }
}

export default Dashboard
