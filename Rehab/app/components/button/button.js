import React from 'react';
import PropTypes from 'prop-types';

import { TouchableHighlight, Text, View } from 'react-native';
import styles from './styles';

const SButton = ({ text, onPress }) => (
    <TouchableHighlight style={styles.container} onPress={onPress} underlayColor='#ba68c8' >
        <Text style={styles.buttonText}> {text} </Text>
    </TouchableHighlight>
);

SButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
}

export default SButton;
