import React, {Component} from 'react';
import {Text,Image,Animated,View,Keyboard,Platform} from 'react-native';
import styles,{assets} from './styles';


class ChairLogo extends Component {
    constructor(props){
        super(props);
        this.imageWidth = new Animated.Value(assets.largeImageWidth);
    }
    componentDidMount(){
        let showListener = 'keyboardWillShow';
        let hideListener = 'keyboardWillHide';
        if(Platform.OS === 'android') {
            showListener = 'keyboardDidShow';
            hideListener = 'keyboardDidHide';
        }
        this.keyboardShowListener = Keyboard.addListener(showListener,this.keyboardShow);
        this.keyboardHideListener = Keyboard.addListener(hideListener,this.keyboardHide);
    }
    componentWillUnmount(){
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    }
    keyboardShow = () => {
        Animated.timing(this.imageWidth,{
            toValue: assets.smallImageWidth,
            duration: 250,
        }).start();
    }
    keyboardHide = () => {
        Animated.timing(this.imageWidth,{
            toValue: assets.largeImageWidth,
            duration: 250,
        }).start();

    }
    render(){
        const containerImageStyle = [
            styles.image,
            {width: this.imageWidth,height: this.imageWidth}
        ];
        return(
            <View style={styles.container}>
            <Animated.Image style = {containerImageStyle} resizeMode='contain' source = {require('./CHAIR.png')}></Animated.Image>
            </View>
        )
    };
};


export default ChairLogo;