import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { AuthWithState} from "./container/Auth";
import {Profile} from "./container/Profile";


export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/auth' component={AuthWithState}  />
            <Route path='/404'>404</Route>
            <Route path='/' component={Profile} />
        </Switch>
    </BrowserRouter>
)
