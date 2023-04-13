import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to my Agit</Text>
            <Text style={styles.description}>
                Denne app kraver internet for at fungere.

                For at få den fulde oplevelse skal Agit bruge din lokation
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate("OneTimeLocation")}>
                <Text> No Thank You </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 32,
    },
});

export default WelcomeScreen;