import React from 'react'

export default class CarMakeRow extends React.Component {
  render() {
    return <div className="search-item">{this.props.car.make}</div>
  }
}
