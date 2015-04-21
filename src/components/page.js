import React from 'react'

export default class Page extends React.Component {

  static contextTypes = {
    router: React.PropTypes.func
  }

  render () {
    return (
        <div>
          SID: {this.context.router.getCurrentParams().sid}
        </div>
      )
  }
}
