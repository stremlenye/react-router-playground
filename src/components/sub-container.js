import React from 'react'
import {RouteHandler} from 'react-router'

export default class SubContainer extends React.Component {

  static contextTypes = {
    router: React.PropTypes.func
  }

  render () {
    return (
        <div>
          <h1>SubContainer</h1>
          ID: {this.context.router.getCurrentParams().id}
          <br />
          SID: {this.context.router.getCurrentParams().sid}
          <RouteHandler />
        </div>
      )
  }
}
