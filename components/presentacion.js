import {
  Text,
  Image,
  Linking,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Presentacion() {

  const abrirLink = () => {
    Linking.openURL(
      'https://www.instagram.com/almadaroman_?igsh=YmdjYTVjdm1rMG00&utm_source=qr'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <Image
          source={require('../assets/imagen.jpeg')}
          style={styles.imagen}
        />

        <Text style={styles.nombre}>Roman Almada</Text>

        <Text style={styles.descripcion}>
          Soy un estudiante que esta aprendiendo a programar.
        </Text>

        {/* BOTON 1 */}
        <Pressable
          
          onLongPress={() =>
            Alert.alert(
              'Instagram',
              'Mantuviste presionado el botón de mi Instagram'
            )
          }
          delayLongPress={800}
          style={styles.botonInstagram}
          onPressIn={() =>
            alert('Estás presionando el botón de mi Instagram')
          }
          onPressOut={() =>
            alert('Soltaste el botón de mi Instagram')
          }
        >
          <Text style={styles.textoBoton}>
            Presionar
          </Text>
        </Pressable>

        {/* BOTON 2 */}
        <Pressable
          onPress={abrirLink}
          hitSlop={{
            top: 15,
            bottom: 15,
            left: 25,
            right: 25,
          }}

          style={({ pressed }) => [
            styles.botonInstagram,
            {
              transform: [
                { scale: pressed ? 0.95 : 1 },
              ],

              opacity: pressed ? 0.7 : 1,

              backgroundColor: pressed
                ? '#9c1550'
                : '#E1306C',
            },
          ]}
        >
          <Text style={styles.textoBoton}>
            mi instagram
          </Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  imagen: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 15,
  },

  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  descripcion: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },

  botonInstagram: {
    backgroundColor: '#E1306C',
    width: 220,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 15,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },

  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

});