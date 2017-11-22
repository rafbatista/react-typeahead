import React from 'react'
import CarMakeRow from './carmakerow'

export default class SearchBox extends React.Component {
  render() {
    return (
      <div className="search-box">
        {this.props.suggestions.map((suggestion, index) => (
          <CarMakeRow key={index} car={suggestion} />
        ))}
      </div>
    )
  }
}
