import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';

const WelcomeScreen = ({navigation}) => {

    const Login = () => {
        //add location thing
        navigation.navigate("Login")
    }
    const CreateUser = () => {
        navigation.navigate("SignIn")
    }
    const DoNotWant = () => {
      navigation.navigate("navigation")
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
                        For at få den fulde oplevelse bedes du at loge in
                    </Text>
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={Login}>
                        <Text style={styles.buttonText}>har en bruger</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={CreateUser}>
                        <Text style={styles.buttonText}>har ikke en bruger</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={DoNotWant}>
                        <Text style={styles.buttonText}>Nej Tak</Text>
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
        backgroundColor: "#c5dafc",
        width: "90%",
        borderRadius: 30,
        height:"65%"

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 25,
    },
    titleView: {
        flex: 1,
        width: "100%",
        alignItems: "center",


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
        alignItems: "center",

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
        flex: 2,

    },
});

export default WelcomeScreen;