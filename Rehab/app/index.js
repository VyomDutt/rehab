import React, { Component } from 'react';
import { createRootNavigator } from './config/routes';
import { Provider } from 'react-redux';
import store from './config/store';
import { isSignedIn } from "./config/storage";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            checkedSignIn: false
        };
    }

    componentDidMount() {
        isSignedIn()
            .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
            .catch(err => alert("An error occurred"));
    }

    render() {
        const { checkedSignIn, signedIn } = this.state;

        // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
        if (!checkedSignIn) {
            return null;
        }

        const Layout = createRootNavigator(signedIn);

        return <Provider store={store}><Layout /></Provider>;

    }
}