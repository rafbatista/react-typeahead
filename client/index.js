import { render } from 'react-dom'
import React from 'react'
import InputBox from './inputbox'
const getMakes = () =>
  fetch('http://localhost:3000/makes').then(res => res.json())

getMakes().then(cars =>
  render(<InputBox cars={cars} />, document.querySelector('.container'))
)
