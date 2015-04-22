import React from 'react'

export default class Page extends React.Component {

  static contextTypes = {
    router: React.PropTypes.func
  }

  render () {
    return (
        <div>
          <h1>Page</h1>
          ID: {this.context.router.getCurrentParams().id}
          <br />
          SID: {this.context.router.getCurrentParams().sid}
        </div>
      )
  }
}
