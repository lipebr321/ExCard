import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';



const Pet = ({ animalImagem, nomeAnimal, comentarioAnimal, descricaoAnimal, status }) => {
  return (
    <View style>
      <Image source={animalImagem} style={{ width: 200, height: 200 }} />
      <text style={{textAlign:'center'}}>{nomeAnimal}</text>
      <text style={{textAlign:'center'}}>{descricaoAnimal}</text>
      <text style={{textAlign:'center'}}>{comentarioAnimal}</text>
      {status && (
        <Text style={{ position: 'absolute', top: 10, right: 10, backgroundColor: 'green', padding: 5, borderRadius: 5 }}>
          Disponível
        </Text>
      )}
      <TouchableOpacity style={{ backgroundColor: 'yellow', padding: 10, borderRadius: 5, marginTop: 10 }}>
        <Text style={{ color: 'black', textAlign: 'center' }}>Adotar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pet;
