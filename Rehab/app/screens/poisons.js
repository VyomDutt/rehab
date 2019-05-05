import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/list';
import poisons from '../data/poisons';
import PropTypes from 'prop-types';

import { PoisonChange } from '../actions/register';
import { connect } from 'react-redux';


class PoisonList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        poison: PropTypes.string,
    };
    handlePress = (poison) => {
        this.props.dispatch(PoisonChange(poison));
        const { navigation } = this.props;
        navigation.goBack(null);
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={poisons}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === this.props.poison}
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
    poison: state.register.poison,
})
export default connect(mapStateToProps)(PoisonList);