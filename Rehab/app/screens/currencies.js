import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CurrencyChange } from '../actions/register';
import { connect } from 'react-redux';

import { FlatList, View, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/list';
import currencies from '../data/currencies';


class CurrencyList extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        currency: PropTypes.string,
    };
    handlePress = (currency) => {
        this.props.dispatch(CurrencyChange(currency));
        const { navigation } = this.props;
        navigation.goBack();
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === this.props.currency}
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
    currency: state.register.currency,
})
export default connect(mapStateToProps)(CurrencyList);