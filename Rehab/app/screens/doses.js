import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DoseTypeChange } from '../actions/register';
import { connect } from 'react-redux';

import { FlatList, View, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/list';
import doses from '../data/doses';

const TEMP_DOS_POISON = 'pieces';

class DoseList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        doseType: PropTypes.string,
    };
    handlePress = (dose) => {
        this.props.dispatch(DoseTypeChange(dose));
        const { navigation } = this.props;
        navigation.goBack(null);
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={doses}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === this.props.doseType}
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
    doseType: state.register.doseType,
})
export default connect(mapStateToProps)(DoseList);