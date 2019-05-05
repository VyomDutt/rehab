import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/list';
import times from '../data/times';
import PropTypes from 'prop-types';


import { TimeTypeChange } from '../actions/register';
import { connect } from 'react-redux';


class TimeList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        timeType: PropTypes.string,

    };
    handlePress = (time) => {
        this.props.dispatch(TimeTypeChange(time));

        const { navigation } = this.props;
        navigation.goBack(null);
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={times}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === this.props.timeType}
                            onPress={() => this.handlePress(item)}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    timeType: state.register.timeType,
})
export default connect(mapStateToProps)(TimeList);