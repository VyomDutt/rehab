import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const MasterButton = ({text,onPress,containerViewStyle}) => (
    <Button onPress={onPress} title={text} backgroundColor='white' containerViewStyle={containerViewStyle} textStyle={{color: '#673AB7',fontWeight:'bold'}} borderRadius={4} underlayColor='#ba68c8'/>
)

MasterButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    containerViewStyle: PropTypes.object,
}

export default MasterButton;