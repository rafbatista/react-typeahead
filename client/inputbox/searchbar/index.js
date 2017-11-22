import React from 'react'

export default class SearchBar extends React.Component {
  render() {
    return (
      <input onChange={this.props.getSuggestions} type="text" id="typeahead" />
    )
  }
}
