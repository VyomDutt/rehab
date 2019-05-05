import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },
    text: {
        color: '#343434',
        fontSize: 16,
    },
    separator: {
        backgroundColor: '#E2E2E2',
        height: 1,
        flex: 1,
        marginLeft: 20,
    },
    icon: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconVisible: {
        backgroundColor: '#7b1fa2',
        borderRadius: 15,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkIcon: {
        width: 18,
    },
});