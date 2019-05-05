import React, { Component} from 'react';
import { Container } from '../components/container';
import PropTypes from 'prop-types';
import { FlatList, Text, Alert, View } from 'react-native';
import { getPoisons } from '../config/retrieve';
import { deviceStorage } from '../config/storage';
import { Trophy } from '../components/trophy'
import { SignOutButton } from '../components/signOutButton';

const mainText = {
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 25,
    color: '#F3E5F5',
};


class Award extends Component {
    constructor(props) {
        super(props);
        this.state = { poisons: [], refreshing: true };
        this.fetchPoisons = this.fetchPoisons.bind(this);
    }
    // Called after a component is mounted
    componentDidMount() {
        setTimeout(() => {
            this.fetchPoisons();
        }, 8000);
    }

    fetchPoisons() {
        getPoisons()
            .then(poisons => this.setState({ poisons, refreshing: false }))
            .catch(() => this.setState({ refreshing: false }));
    }

    handleRefresh() {
        this.setState(
            {
                refreshing: true
            },
            () => this.fetchPoisons()
        );
    }

    handleSignOutPress = () => {
        Alert.alert(
            'Sign Out',
            'Are you sure you want to sign out?',
            [
                {
                    text: 'Yes', onPress: () => {
                        deviceStorage.deleteJWT();
                        this.props.navigation.navigate('SignedOut');
                    }
                },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },]);

    }

    static propTypes = {
        navigation: PropTypes.object,
    }



    render() {
        return (
            <Container>
                <SignOutButton onPress={this.handleSignOutPress} />
                <View style={{alignItems: 'center'}}>
                <Text style={mainText}>Here are your achievements:</Text>
                </View>

                <FlatList
                    horizontal
                    data={this.state.poisons}
                    renderItem={({ item }) => <Trophy poison={item} />}
                    keyExtractor={item => item.id.toString()}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh.bind(this)}
                />
            </Container>
        );
    }
}

export default Award;