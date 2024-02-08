import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pet from './src/componentes/pet';

const App = () => {
  return (
    <View style={styles.container}>
      <Pet
        animalImagem={require('./src/componentes/images/cachorro.jpg')}
        nomeAnimal= "Jully"
        descricaoAnimal= "femea, com 4 meses"
        comentarioAnimal = "mansa e muito amavel" 
        status={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft : '60px',
    marginTop : '60px',
    width : '320 px',
    height : '320px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10%',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,

  },
});

export default App;
