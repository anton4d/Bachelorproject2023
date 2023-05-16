import React from "react";
import { View } from "react-native/types";

const ProductScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: 'blue', width: windowWidth, height: 300, borderBottomColor:
                    '#839D69', borderBottomWidth: 8,
            }}>
                <Image source={require('../../assets/AgitLogo.png')}
                    style={{ backgroundColor: 'black', width: windowWidth, maxHeight: 292, }}
                    resizeMode='cover'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default ProductScreen;