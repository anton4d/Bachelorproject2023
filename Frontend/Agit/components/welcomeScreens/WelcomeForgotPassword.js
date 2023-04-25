import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, TextInput} from 'react-native';

const WelcomeForgotPassword = ({navigation}) => {
    const [Email, onChangeEmail] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    const ForgotPassword = () => {
        if (Email === '') {
            setErrorMessage('du mangler at skrive en email')
            return
        }
        console.log(Email)
        onChangeEmail('')
        navigation.navigate("Login")
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                barStyle={"default"}
            />
            <View style={styles.welcomeContainer}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Glemt kodeord</Text>
                </View>


                <View style={styles.buttonView}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={Email}
                        placeholder="Email"
                    />
                    {errorMessage !== '' && (
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    )}
                    <TouchableOpacity style={styles.button} onPress={ForgotPassword}>
                        <Text style={styles.buttonText}>Send kodeord</Text>
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
        height: "65%"
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
        justifyContent: "center",
        marginBottom: 20,
        flex: 5
    },
    loginText: {
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

export default WelcomeForgotPassword;