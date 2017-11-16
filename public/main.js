import React from 'react'
import { render } from 'react-dom'

const carMakes = []

const getMakes = () => {
  fetch('http://localhost:3000/makes')
    .then(res => res.json())
    .then(makes => {
      makes.forEach(make => carMakes.push(make))
    })
}

getMakes()

const $input = document.querySelector('#typeahead')
const $searchBox = document.querySelector('.search-box')

class CarMakeRow extends React.Component {
  render() {
    const car = this.props.car
    return (
      <div className="search-item" data-name={car.make}>
        {car.make}
      </div>
    )
  }
}

class SearchBox extends React.Component {
  render() {
    const searchItems = []
    this.props.cars.forEach(car => {
      searchItems.push(<CarMakeRow make={car.make} key={car.make} />)
    })
    return <div className="search-box">{searchItems}</div>
  }
}

class SearchBar extends React.Component {
  render() {
    return <input type="text" id="typeahead" />
  }
}

class InputBox extends React.Component {
  // ComponentWillMount () {
  //   fetch('http://localhost:3000/makes')
  //     .then(res => res.json())
  //     .then(makes => {
  // }

  render() {
    return (
      <div className="input-box">
        <SearchBar />
        <SearchBox cars={this.props.cars} />
      </div>
    )
  }
}
render(<InputBox cars={carMakes} />, document.querySelector('.container'))

// class SearchBox extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       matches: [{ make: 'Acura' }]
//     }
//     this.makes = [{ make: 'Acura' }]
//   }
//
//   typeahead() {
//     this.matches.splice(0, this.matches.length)
//     for (var i = 0; i < this.makes.length; i++) {
//       if (
//         this.makes[i].make.toLowerCase().startsWith($input.value.toLowerCase())
//       ) {
//         this.matches.push(this.makes[i].make)
//       }
//       return this.matches
//     }
//   }
//
//   componentWillMount() {
//     fetch('http://localhost:3000/makes')
//       .then(res => res.json())
//       .then(makes => (this.makes = { makes }))
//   }
//
//   componentDidMount() {
//     setInterval(() => this.typeahead(), 16)
//   }
//
//   render() {
//     return <div>{this.makes.make[0]}</div>
//   }
// }
//
// render(<SearchBox />, $searchBox)
