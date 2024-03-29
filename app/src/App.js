import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import NotFound from "./views/404"
import QuizComponent from "./views/QuizComponent"


export const client = new ApolloClient({
    uri: "http://localhost:8000/graphql"
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route exact path="/" component={QuizComponent}/>
                    <Route exact path="/404" component={NotFound}/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;
