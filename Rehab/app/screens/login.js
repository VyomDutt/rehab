import React, { Component } from 'react';
import { Container } from '../components/container';
import { InputText } from '../components/input';
import { SButton } from '../components/button';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { usernameChange, passwordChange, login } from '../actions/register';
import { connect } from 'react-redux';
import { ChairLogo } from '../components/logo';
import { MasterButton } from '../components/masterButton';
import { Poison } from '../components/poison';
import PropTypes from 'prop-types';


class Login extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        username: PropTypes.string,
        password: PropTypes.string,
        token: PropTypes.string,
    }
    handleUsernameChange = (text) => {
        this.props.dispatch(usernameChange(text));
    };
    handlePasswordChange = (text) => {
        this.props.dispatch(passwordChange(text));
    };
    handleLoginPress = () => {
        this.props.dispatch(login());
        this.props.navigation.navigate('SignedIn');
    };

    handleRegisterPress = () => {
        this.props.navigation.navigate('Register1');

    };

    render() {
        return (
            <Container>
                <KeyboardAvoidingView behavior="padding">
                    <ChairLogo />

                    <InputText value={this.props.username} holder="Username" onChangeText={(text) => this.handleUsernameChange(text)} />
                    <InputText value={this.props.password} holder="Password" onChangeText={(text) => this.handlePasswordChange(text)} />
                    <View style={{flexDirection: 'row',justifyContent: 'space-evenly',marginTop: 10}}>
                    <MasterButton text="Login" onPress={this.handleLoginPress} containerViewStyle={{width: '45%',marginRight: 0,marginLeft: 0, borderRadius: 4}}/>
                    <MasterButton text="Register" onPress={this.handleRegisterPress} containerViewStyle={{width: '45%',marginRight: 0,marginLeft: 0, borderRadius: 4}} />
                    </View>
                    
                </KeyboardAvoidingView>

            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    const username = state.register.username;
    const password = state.register.password;
    const token = state.register.token;

    return {
        username,
        password,
        token,
    };
};
export default connect(mapStateToProps)(Login);