import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import ProgressCircle from 'react-native-progress-circle';
import { Card } from 'react-native-elements';

class Poison extends Component {
    render() {
        const {
            name,
            dose_size,
            dose_type,
            no_of_doses,
            price_of_doses,
            currency,
            time_period,
            time_type,
            avg_value,
            alpha,
            progress,
            counter,
            spent,
            total,
            stats,
        } = this.props.poison;
        let result = stats.map(a => a.dose_size);


        const old_avg = no_of_doses * dose_size;
        const saved = ((old_avg - avg_value) * price_of_doses);
        return (

            <Card
                title={name}
                titleStyle={styles.titleText}
                wrapperStyle={styles.wrapper}
                containerStyle={styles.container}
                dividerStyle={styles.divider}>
                <Text style={styles.text}>Your daily progress is: </Text>
                <View style={{ alignItems: 'center', marginBottom: 5, marginTop: 5 }}>
                    <ProgressCircle
                        percent={Number(progress) * 100}
                        radius={60}
                        borderWidth={6}
                        shadowColor="#CCCCCC"
                        color="rgb(134, 65, 244)"
                        bgColor="#F3E5F5">
                        <Text style={styles.number}>{Math.round(progress * 100 * 100) / 100}</Text>
                    </ProgressCircle>
                </View>
                <Text style={styles.text}>In the past <Text style={styles.number}>{time_period} {time_type}</Text>, you averaged <Text style={styles.number}>{old_avg} {dose_type}</Text> of {name} a day. </Text>
                <Text style={styles.text}>You had already spent <Text style={styles.number}>{spent} {currency}</Text> on <Text style={styles.number}> {total} {dose_type} </Text>of {name} when you joined us!{"\n"}</Text>
                <Text style={styles.text}>But in the past 5 days, you averaged <Text style={styles.number}>{avg_value} {dose_type}</Text> of {name} a day. </Text>
                <Text style={styles.text}>You saved <Text style={styles.number}>{saved} {currency}</Text> on {name} in those 5 days.{"\n"}</Text>

                <View style={{ height: 200, flexDirection: 'row' }}>
                    <YAxis
                        data={result}
                        contentInset={{ top: 20, bottom: 20 }}
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        numberOfTicks={10}
                        formatLabel={value => `${value} ${dose_type}`}
                    />
                    <LineChart
                        style={{ flex: 1, marginLeft: 16 }}
                        data={result}
                        svg={{
                            stroke: 'rgb(134, 65, 244)',
                            strokeWidth: 2.5
                        }}
                        contentInset={{ top: 20, bottom: 20 }}
                    >
                    </LineChart>
                </View>
            </Card >



        );
    };
}

export default Poison;