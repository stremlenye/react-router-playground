import React from 'react'
import {default as Router, Route} from 'react-router'
import {Container, SubContainer, Page} from 'components'

let routes = (
    <Route name="root" path="/" handler={Container}>
      <Route path="smoke" handler={SubContainer}>
        <Route path="test" handler={Page} />
      </Route>
      //valid
      <Route name="sid_new" path=":sid/new" handler={Page} />
      //valid
      <Route name="new_sid" path="new/:sid" handler={Page} />
      //valid
      <Route name="id" path=":id" handler={SubContainer}>
        //invalid
        <Route name="id-new_sid" path="new/:sid" handler={Page}/>
        // /1/12
        <Route name="id-sid" path=":sid" handler={Page} />
      </Route>
    </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body)
})
