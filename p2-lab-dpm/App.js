import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.textCenter}>Riska Radiance 223510372</Text>
      
      {/* Flex container untuk kotak */}
      <View style={styles.flexContainer}>
        <View style={[styles.box, styles.boxLeft]}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={[styles.box, styles.boxRight]}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
  },
  textCenter: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flexContainer: {
    flexDirection: 'row', // Menempatkan kotak secara horizontal
    justifyContent: 'space-between',
    width: 300, // Menentukan lebar container
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 15, // Membuat sudut membulat
    justifyContent: 'center', // Menempatkan teks di tengah kotak secara vertikal
    alignItems: 'center', // Menempatkan teks di tengah kotak secara horizontal
  },
  boxLeft: {
    backgroundColor: '#D02090', // Warna kotak kiri (violet red)
  },
  boxRight: {
    backgroundColor: '#FFC0CB', // Warna kotak kanan (pink muda)
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Warna teks
  },
});

export default App;
