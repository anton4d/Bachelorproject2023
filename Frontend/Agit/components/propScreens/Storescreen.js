import React from "react";
import { View, Text, StyleSheet, Image, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';

const DATA = [
    {
        id: '1',
        title: 'BANANER',
        price: '2,75',
        image: require('../../assets/ProductMockImages/banana.png')
    },
    {
        id: '2',
        title: 'MINIMÆLK 0,4% FEDT',
        price: '11,95',
        image: require('../../assets/ProductMockImages/Milk.png')
    },
    {
        id: '3',
        title: 'SKRABEÆG M/L',
        price: '20,00',
        image: require('../../assets/ProductMockImages/Egg.png')
    },
    {
        id: '4',
        title: 'HAMBURGERRYG I SKIVER',
        price: '17,50',
        image: require('../../assets/ProductMockImages/Hamburgerryg.png')
    },
    {
        id: '5',
        title: 'PEPSI MAX',
        price: '15,00',
        image: require('../../assets/ProductMockImages/PepsiMax.png')
    },
    {
        id: '6',
        title: 'YOGHURTBOLLER',
        price: '15,00',
        image: require('../../assets/ProductMockImages/YoghurtBoller.png')
    },
];

const Storescreen = () => {

    const { windowHeight, windowWidth } = useWindowDimensions();

    const [addrs, setAddrs] = React.useState('Addrs value goes here')

    const [like, setLike] = React.useState(false)

    const changeLike = () => {
        if (like) {
            setLike(false)
        }
        else {
            setLike(true)
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ width: windowWidth, height: 100, marginTop: 4, justifyContent: 'center', alignContent: 'center' }}>
                <Image source={require('../../assets/NettoMinimal.png')}
                    style={{ width: windowWidth, maxHeight: 100, }}
                    resizeMode='contain'
                />
            </View>
            <View style={{ width: '100%', paddingHorizontal: 10, marginBottom: 12 }}>
                <View style={{
                    width: '100%', flexDirection: 'row', justifyContent: 'center', alignContent: 'center',
                    marginBottom: 20, marginTop: 8
                }}>
                    <Ionicons name='md-location-sharp' color='blue' style={{ fontSize: 22, }} />
                    <Text style={{ fontSize: 16, }}>{addrs}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <View style={{
                        flexDirection: 'column', justifyContent: 'center', alignContent: 'center',
                    }}>
                        <TouchableOpacity>
                            <View style={styles.buttonView}>
                                <MaterialCommunityIcons name='content-copy' style={styles.IconStyle} />
                                <Text style={styles.buttonText}>Kopir adr.</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'column', justifyContent: 'center', alignContent: 'center', marginLeft: 14,
                    }}>
                        <TouchableOpacity onPress={changeLike}>
                            <View style={styles.buttonView}>
                                {RenderLikeIcon(like)}
                                {RenderLikeText(like)}
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.borderLineView} />
            <View>
                <View style={styles.subTitleBox}>
                    <Text style={styles.subTitle}>Lokale tilbud</Text>
                </View>
                <FlatList
                    horizontal
                    style={styles.discountsList}
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} price={item.price} image={item.image} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.borderLineView} />
            <View>
                <View style={styles.subTitleBox}>
                    <Text style={styles.subTitle}>Sidste salgsdatos tilbud</Text>
                </View>
                <FlatList
                    horizontal
                    style={styles.discountsList}
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} price={item.price} image={item.image} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};

function Item({ title, price, image }) {
    return (
        <TouchableOpacity>
            <View style={styles.discountItem}>
                <View style={styles.discountItemImageView}>
                    <Image source={image}
                        style={styles.discountItemImage}
                        resizeMode='contain'
                    />
                </View>
                <Text style={styles.discountItemText} numberOfLines={2}>{title}</Text>
                <Text style={styles.discountItemPrice}>{price}</Text>
            </View>
        </TouchableOpacity>
    )
}

function RenderLikeIcon(like) {
    if (like) {
        return (
            <MaterialCommunityIcons name='heart' style={styles.IconStyle} />
        )
    }
    else {
        return (
            <MaterialCommunityIcons name='heart-outline' style={styles.IconStyle} />
        )
    }
}

function RenderLikeText(like) {
    if (like) {
        return (
            <Text style={styles.buttonText}>Butik gemt</Text>
        )
    }
    else {
        return (
            <Text style={styles.buttonText}>Gem butik</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    subTitleBox: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        width: '100%',
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingHorizontal: 16,
        paddingTop: 6,
        paddingBottom: 2,
    },
    discountsList: {
        marginBottom: 6,
    },
    discountItem: {
        width: 100,
        height: 140,
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    discountItemImage: {
        maxWidth: 74,
        maxHeight: 74,
        alignSelf: 'center',
        borderRadius: 6,
    },
    discountItemImageView: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderColor: '#03a43e',
        borderWidth: 2,
        borderRadius: 6,
    },
    discountItemText: {
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center'
    },
    discountItemPrice: {
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    borderLineView: {
        borderBottomWidth: 3,
        borderColor: '#03a43e',
    },
    buttonView: {
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        height: 'auto',
        width: 'auto',
        alignSelf: 'center',
        borderColor: '#03a43e',
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 4,
        paddingBottom: 2,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#03a43e',
        fontWeight: 'bold'
    },
    IconStyle: {
        fontSize: 26,
        paddingTop: 2,
        color: '#03a43e'
    },
});

export default Storescreen;