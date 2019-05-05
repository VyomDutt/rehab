import {Dimensions,StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width/2;

export const assets = {
    largeImageWidth: imageWidth,
    smallImageWidth: imageWidth/2,
}
export default StyleSheet.create({
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth,
        marginBottom: 30,
    },
    container: {
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        letterSpacing: -0.1,
        marginTop: 5,
    },
});
 