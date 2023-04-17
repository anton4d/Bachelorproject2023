import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';

const WelcomeScreen = ({navigation}) => {

    const tillad = () => {
        //add location thing
        navigation.navigate("Login")
    }
    const nejTak = () => {
        navigation.navigate("OneTimeLocation")
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                barStyle={"default"}
            />
            <View style={styles.welcomeContainer}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Welcome to Agit</Text>
                </View>
                <View style={styles.descriptionView}>
                    <Text style={styles.description}>
                        Denne app kraver internet for at fungere.
                    </Text>
                    <Text style={styles.description}>
                        For at få den fulde oplevelse skal Agit bruge din lokation
                    </Text>
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={tillad}>
                        <Text style={styles.buttonText}> Tillad Lokation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={nejTak}>
                        <Text style={styles.buttonText}> Nej Tak </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
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
        height: "65%",
        backgroundColor: "#c5dafc",
        width: "90%",
        borderRadius: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 25,
    },
    titleView: {
        flex: 1,
        width: "100%",
        alignItems: "center"

    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        padding: 5,
        width: "90%",
    },
    descriptionView: {
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
        marginBottom: 20,
        flex: 2
    },
});

export default WelcomeScreen;