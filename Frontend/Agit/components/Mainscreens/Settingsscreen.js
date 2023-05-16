import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

const SettingsScreen = () => {

  const [distance, setDistance] = React.useState('')

  /*const dinmor = () => {
    setDistance=
  }*/

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indstillinger</Text>
      <View style={{ alignSelf: 'center', backgroundColor: 'black', height: 2, width: '70%' }} />
      <Text style={styles.subTitle}>
        Konto indstillinger
      </Text>
      <Text style={styles.subSubTitle}>
        Email:
      </Text>
      <View style={styles.userDetailsBox}>
        <Text style={styles.userDetails}>
          {'(bruger email)'}
        </Text>
        <Text style={styles.skiftTextButton}>
          Skift email
        </Text>
      </View>
      <Text style={styles.subSubTitle}>
        Password:
      </Text>
      <View style={styles.userDetailsBox}>
        <Text style={styles.userDetails}>
          {'(bruger password)'}
        </Text>
        <Text style={styles.skiftTextButton}>
          Skift password
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonView}>
        <Text style={styles.buttonText}>
          Log ud
        </Text>
      </TouchableOpacity>
      <Text style={styles.subTitle}>
        Tilbuds opdagelse indstillinger
      </Text>
      <Text style={styles.subSubTitle}>
        Primær lokation:
      </Text>
      <View style={styles.userDetailsBox}>
        <Text style={styles.userDetails}>
          {'(valgte primær lokation)'}
        </Text>
        <Text style={styles.skiftTextButton}>
          Skift lokation
        </Text>
      </View>
      <Text style={styles.description}>
        Se tilbud i nærheden af din primær lokation hvis plasering ikke er aktiveret på din mobil
      </Text>
      <Text style={styles.subSubTitle}>
        Maksimal tilbuds afstand:
      </Text>
      <View style={styles.userDetailsBox}>
        <Text style={styles.userDetails}>
          Maksimal afstand
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'right', paddingEnd: 8, paddingVertical: 4 }}>
          {distance} km.
        </Text>
        <Slider
          style={{ alignSelf: 'center', width: '100%', height: 40 }}
          minimumTrackTintColor="#03a43e"
          maximumTrackTintColor="#000000"
          thumbTintColor="#81d29f"
          minimumValue={1}
          maximumValue={50}
          value={5}
          step={1}
          onValueChange={setDistance}
        />
      </View>
      <Text style={styles.description}>
        Viser kun tilbud inde for den valgte afstand
      </Text>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 8,
    paddingTop: 16,
  },
  subTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingHorizontal: 16,
    paddingTop: 25
  },
  subSubTitle: {
    fontSize: 18,
    textAlign: 'left',
    paddingHorizontal: 16,
    paddingTop: 7
  },
  userDetails: {
    fontSize: 16,
    textAlign: 'left',
    paddingStart: 8,
    paddingVertical: 4,
  },
  skiftTextButton: {
    fontSize: 16,
    textAlign: 'right',
    paddingEnd: 8,
    paddingVertical: 4,
    color: '#5065ff'
  },
  userDetailsBox: {
    flexWrap: 'wrap',
    marginHorizontal: '4%',
    width: '92%',
    borderRadius: 11,
    backgroundColor: '#b3b3b3',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingTop: 2,
    marginBottom: 6,
  },
  buttonView: {
    marginTop: 12,
    marginLeft: 16,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b3b3b3',
    width: 'auto'
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
