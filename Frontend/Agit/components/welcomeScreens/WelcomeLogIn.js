import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, TextInput} from 'react-native';

const WelcomeLogIn = ({navigation}) => {
    const [Email, onChangeEmail] = React.useState('');
    const [Password, onChangePassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    const LogIn = () => {
        console.log(Email + " "+Password)
        //implement read get request agree to location.
        if(Email === '' || Password === ''){
            setErrorMessage('mangler Email eller kodeord')
            return
        }
        navigation.navigate("Walktrough")
    }
    const ForgotPassword = () => {
        navigation.navigate("ForgotPassword")
    }
    const CreateUser = () => {
        navigation.navigate("SignIn")

    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                barStyle={"default"}
            />
            <View style={styles.welcomeContainer}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Log In</Text>
                </View>


                <View style={styles.buttonView}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={Email}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={Password}
                        placeholder="Password"
                    />
                    {errorMessage !== '' && (
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    )}
                    <TouchableOpacity style={styles.button} onPress={LogIn}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row",}}>
                        <TouchableOpacity onPress={ForgotPassword}>
                            <Text style={styles.loginText}>Glemt kodeord</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={CreateUser}>
                            <Text style={styles.loginText}>Har ingen bruger</Text>
                        </TouchableOpacity>
                    </View>
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

export default WelcomeLogIn;