import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';

const normalOfferDATA = [
    {
        id: '1',
        clearance: false,
        description: 'PEPSI MAX',
        image: require('../../assets/ProductMockImages/PepsiMax.png'),
        originalPrice: '22,00',
        newPrice: '15,00',
        startTime: '2023-10-31',
        endTime: '2023-11-15',
        brand: 'netto',

    },
];

const clearanceOfferDATA = [
    {
        id: '1',
        clearance: true,
        description: 'HAMBURGERRYG I SKIVER',
        image: require('../../assets/ProductMockImages/Hamburgerryg.png'),
        originalPrice: '17,50',
        newPrice: '8,00',
        startTime: '2023-09-20',
        endTime: '2023-10-05',
        brand: 'føtex',
        city: 'Odense',
        street: 'Vesterbro 39-51',
        zip: '5000',
    },
];


const ProductScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{
                width: 150, height: 150, borderColor: '#03a43e', borderWidth: 2, borderRadius: 6,
                alignSelf: 'center', alignContent: 'center', justifyContent: 'center', marginTop: 30
            }}>
                <Image source={require('../../assets/ProductMockImages/Hamburgerryg.png')}
                    style={{ width: 144, maxHeight: 144, borderRadius: 6, alignSelf: 'center', }}
                    resizeMode='cover'
                />
            </View>
            <Text style={styles.productName}>HAMBURGERRYG I SKIVER</Text>
            <Text style={styles.productPrice}>8,00 kr.</Text>
            <View style={styles.borderLineView} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Tilbuds Detaljer</Text>
            <View style={{ borderBottomWidth: 3, borderColor: '#03a43e', width: 180, }} />
            <Text style={styles.detailsCatagory}>Pris Før:</Text>
            <Text style={styles.detailsDescription}>17,50 kr.</Text>
            <View style={styles.detailsBorderLine} />
            <Text style={styles.detailsCatagory}>Butik:</Text>
            <Text style={styles.detailsDescription}>føtex, Vesterbro 39-51, Odense 5000</Text>
            <View style={styles.detailsBorderLine} />
            <Text style={styles.detailsCatagory}>Tilbud Start:</Text>
            <Text style={styles.detailsDescription}>20-09-2023</Text>
            <View style={styles.detailsBorderLine} />
            <Text style={styles.detailsCatagory}>Tilbud Slut:</Text>
            <Text style={styles.detailsDescription}>05-10-2023</Text>
            <View style={styles.detailsBorderLine} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    productName: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: 60,
        marginTop: 14,
        marginBottom: 4,
        textAlign: 'center'
    },
    productPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: 60,
        marginBottom: 14,
        textAlign: 'center'
    },
    borderLineView: {
        borderBottomWidth: 3,
        borderColor: '#03a43e',
        width: '100%'
    },
    detailsView: {
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    detailsSubView1: {
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '50%',
        paddingLeft: 20,
        paddingRight: 14,
        paddingVertical: 8,
    },
    detailsSubView2: {
        alignSelf: 'flex-end',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '50%',
        paddingLeft: 16,
        paddingRight: 20,
        paddingVertical: 8,
    },
    detailsCatagory: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: 4,
        alignSelf: 'flex-start',
        paddingTop: 8,
        paddingHorizontal: 16,
    },
    detailsDescription: {
        fontSize: 18,
        alignSelf: 'flex-start',
        paddingBottom: 8,
        paddingHorizontal: 16,
    },
    detailsMiddleBL: {
        borderLeftWidth: 3,
        borderColor: '#81d29f',
        height: '80%',
        alignSelf: 'center',
    },
    detailsBorderLine: {
        borderBottomWidth: 3,
        borderColor: '#81d29f',
        width: '92%'
    },
});

export default ProductScreen;