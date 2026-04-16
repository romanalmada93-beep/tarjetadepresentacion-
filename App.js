import { View, Text, Image, Button, Linking, StyleSheet } from 'react-native';

export default function App() {

  const abrirLink = () => {
    Linking.openURL('https://www.instagram.com/almadaroman_?igsh=YmdjYTVjdm1rMG00&utm_source=qr');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

     <Image
  source={require("./assets/imagen.jpeg")}
  style={styles.imagen}
/>

      <Text>Roman Almada</Text>

      <Text>Soy un estudiante que esta aprendiendo a programar.</Text>
    

     

      <Button
        title="Mi instagram"
        onPress={abrirLink}
      />

    </View>
    
  );
}
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
    imagen:{
      height: 100,
      width:100,
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
   boton: {
    backgroundColor: '#E1306C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
   textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
