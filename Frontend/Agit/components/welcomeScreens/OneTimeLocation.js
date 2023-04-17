import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar,TextInput} from 'react-native';

const OneTimeLocation = ({navigation}) => {
    const [text, onChangeText] = React.useState('');

    const nejTak = () => {
        console.log(text)
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
                    <Text style={styles.title}>Engangs Lokalition</Text>
                </View>
                <View style={styles.descriptionView}>
                    <Text style={styles.description}>
                            Siden du ikke tillader gps lokalition kræver appen en general lokalition for at give dig butikker i dit generale omrøde
                    </Text>
                </View>

                <View style={styles.buttonView}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="by, postnummer, gadenavn"
                    />
                    <TouchableOpacity style={styles.button} onPress={nejTak}>
                        <Text style={styles.buttonText}> Godkend lokalition </Text>
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "80%"
    },
});

export default OneTimeLocation;