import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Walkthrough = ({WelcomeDone}) => {
    const goToHomeScreen = () => {
        WelcomeDone(false)
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hvad kan app</Text>
            <Text style={styles.description}>
                Hej appen har 4 skærme
            </Text>
            <TouchableOpacity style={styles.button} onPress={goToHomeScreen}><Text style={styles.buttonText}>Go back</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#365054"
    },
    welcomeContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c5dafc",
        width: "90%",
        borderRadius: 30,
        height:"65%"
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 28,
    },
    titleView: {
        flex: 1,
        width: "100%",
        alignItems: "center"

    },
    button: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#4bb91b",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
    },
    buttonView: {
        width: "100%",
        alignItems: "center",
        justifyContent:"center",
        marginBottom: 20,
        flex: 5
    },
    loginText:{
        color: "blue",
        paddingEnd: "8%",
        paddingStart: "8%"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "80%"
    },
});

export default Walkthrough;