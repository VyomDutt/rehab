import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import styles from './styles'

const AddButton = ({ onPress }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Icon name='ios-add-circle-outline' type='ionicon' size={40} iconStyle={styles.icon} />
        </TouchableOpacity>
    </View>
);
AddButton.propTypes = {
    onPress: PropTypes.func,
};

export default AddButton;