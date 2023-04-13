import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OneTimeLocation = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Engangs lokalition</Text>
            <Text style={styles.description}>
                This is the Store screen. You can add your own content here.
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Walktrough")}>
                <Text> done </Text>
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

export default OneTimeLocation;