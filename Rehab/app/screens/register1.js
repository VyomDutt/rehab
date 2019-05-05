import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from '../components/container';
import { InputText } from '../components/input';
import { MasterButton } from '../components/masterButton';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { usernameChange, passwordChange, emailChange, next } from '../actions/register';
import { connect } from 'react-redux';
import { ChairLogo } from '../components/logo';

class Register1 extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        username: PropTypes.string,
        password: PropTypes.string,
        email: PropTypes.string,
        token: PropTypes.string,

    };
    handleUsernameChange = (text) => {
        this.props.dispatch(usernameChange(text));
    };
    handlePasswordChange = (text) => {
        this.props.dispatch(passwordChange(text));
    };

    handleEmailChange = (text) => {
        this.props.dispatch(emailChange(text));
    };
    handleNextPress = () => {
        this.props.dispatch(next());
        this.props.navigation.navigate('Register2');
    };

    render() {
        return (
            <Container>
                <KeyboardAvoidingView behavior="padding">
                    <ChairLogo />

                    <InputText value={this.props.username} holder="Username" onChangeText={(text) => this.handleUsernameChange(text)} />
                    <InputText value={this.props.password} holder="Password" onChangeText={(text) => this.handlePasswordChange(text)} />
                    <InputText value={this.props.email} holder="Email" onChangeText={(text) => this.handleEmailChange(text)} />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 10,

                        }}>
                        <MasterButton text="Next" onPress={this.handleNextPress} containerViewStyle={{width: '50%',marginRight: 0,marginLeft: 0, borderRadius: 4}}/>
                    </View>
                </KeyboardAvoidingView>

            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    const username = state.register.username;
    const password = state.register.password;
    const email = state.register.email;
    const token = state.register.token;
    return {
        username,
        password,
        email,
        token,
    };
};
export default connect(mapStateToProps)(Register1);