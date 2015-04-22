import React from 'react'
import {RouteHandler} from 'react-router'

export default class Container extends React.Component {
  render () {
    return (
      <div>
        <h1>Container</h1>
        <RouteHandler />
      </div>)
  }
}
