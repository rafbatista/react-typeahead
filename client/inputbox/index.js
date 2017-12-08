import React from 'react'
import SearchBar from './searchbar'
import SearchBox from './searchbox'

export default class InputBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { cars: this.props.cars, suggestions: [] }
    this.getSuggestions = this.getSuggestions.bind(this)
  }

  getSuggestions(event) {
    event.target.value === ''
      ? this.setState({ suggestions: [] })
      : this.setState({
          suggestions: this.state.cars.filter(car =>
            car.make.toLowerCase().startsWith(event.target.value.toLowerCase())
          )
        })
  }

  render() {
    return (
      <div className="input-box">
        <SearchBar getSuggestions={this.getSuggestions} />
        <SearchBox suggestions={this.state.suggestions} />
      </div>
    )
  }
}
