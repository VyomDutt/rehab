import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import { ProgressCircle, LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Trophy extends Component {
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
        var a,b,c,d,e,f,g,h,i,j,k,l;
        const coloredMoneyIcon = (<Icon name="currency-inr" size={40} color="#673AB7" />);
        const greyedMoneyIcon = (<Icon name="currency-inr" size={40} color="#999999" />);
        const coloredProgressIcon = (<Icon name="chart-line-variant" size={40} color="#673AB7" />);
        const greyedProgressIcon = (<Icon name="chart-line-variant" size={40} color="#999999" />);
        const realProgress= Math.round(progress * 100 * 100) / 100;

        if(saved>100){
            a = coloredMoneyIcon;
        }
        else{
            a = greyedMoneyIcon;
        }

        if(saved>500){
            b = coloredMoneyIcon;
        }
        else{
            b = greyedMoneyIcon;
        }
        
        if(saved>1000){
            c = coloredMoneyIcon;
        }
        else{
            c = greyedMoneyIcon;
        }

        if(saved>2000){
            d = coloredMoneyIcon;
        }
        else{
            d = greyedMoneyIcon;
        }

        if(saved>5000){
            e = coloredMoneyIcon;
        }
        else{
            e = greyedMoneyIcon;
        }

        if(saved>10000){
            f = coloredMoneyIcon;
        }
        else{
            f = greyedMoneyIcon;
        }

        if(realProgress>5){
            g = coloredProgressIcon;
        }
        else{
            g = greyedProgressIcon;
        }

        if(realProgress>10){
            h = coloredProgressIcon;
        }
        else{
            h = greyedProgressIcon;
        }

        if(realProgress>25){
            i = coloredProgressIcon;
        }
        else{
            i = greyedProgressIcon;
        }

        if(realProgress>50){
            j = coloredProgressIcon;
        }
        else{
            j = greyedProgressIcon;
        }

        if(realProgress>75){
            k = coloredProgressIcon;
        }
        else{
            k = greyedProgressIcon;
        }

        if(realProgress>100){
            l = coloredProgressIcon;
        }
        else{
            l = greyedProgressIcon;
        }
        return (
            <Card
                title={"In your fight against " + name.toLowerCase()}
                titleStyle={styles.titleText}
                wrapperStyle={styles.wrapper}
                containerStyle={styles.container}
                dividerStyle={styles.divider}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="trophy-award" size={40} color="#673AB7" />
                        <Text style={styles.text} >           Congrats on joining!</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        {a}
                        <Text style={styles.text}>           Saved 100 rupees.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        {b}
                        <Text style={styles.text}>           Saved 500 rupees.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        {c}
                        <Text style={styles.text}>           Saved 1000 rupees.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        {d}
                        <Text style={styles.text}>           Saved 2000 rupees.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        {e}
                        <Text style={styles.text}>           Saved 5000 rupees.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        {f}
                        <Text style={styles.text}>           Saved 10,000 rupees.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        {g}
                        <Text style={styles.text}>           Made 5% progress.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        {h}
                        <Text style={styles.text}>           Made 10% progress.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        {i}
                        <Text style={styles.text}>           Made 25% progress.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        {j}
                        <Text style={styles.text}>           Made 50% progress.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        {k}
                        <Text style={styles.text}>           Made 75% progress.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        {l}
                        <Text style={styles.text}>           Made 100% progress.</Text>
                    </View>
                </ScrollView>

            </Card >



        );
    };
}

export default Trophy;