import React from 'react'
import {default as Router, Route} from 'react-router'
import {Container, SubContainer, Page} from 'components'

let routes = (
    <Route path="/" handler={Container}>
      <Route path=":sid/new" handler={Page} />
      <Route path="new/:sid" handler={Page} />
      <Route path=":id/:sid" handler={Page} />
      <Route path=":id" handler={SubContainer} />
    </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body)
})
