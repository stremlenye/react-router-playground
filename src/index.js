import React from 'react'
import {default as Router, Route} from 'react-router'
import {Container, SubContainer, Page} from 'components'

let routes = (
    <Route path="/" handler={Container}>
      <Route path="/:id" handler={SubContainer} />
    </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body)
})
