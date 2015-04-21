import React from 'react'
import {RouteHandler} from 'react-router'

export default class SubContainer extends React.Component {

  static contextTypes = {
    router: React.PropTypes.func
  }

  render () {
    return (
        <div>
          ID: {this.context.router.getCurrentParams().id}
          <RouteHandler />
        </div>
      )
  }
}
