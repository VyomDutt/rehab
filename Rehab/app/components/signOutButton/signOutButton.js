import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import styles from './styles'

const SignOutButton = ({ onPress }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Icon name='md-exit' type='ionicon' iconStyle={styles.icon} />
        </TouchableOpacity>
    </View>
);
SignOutButton.propTypes = {
    onPress: PropTypes.func,
};

export default SignOutButton;