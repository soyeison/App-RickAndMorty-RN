import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Informacion({ image, name }) {
  return (
    <View style={styleInformacion.container}>
      <Image style={styleInformacion.img} source={{ uri: image }} />
      <Text>{name}</Text>
    </View>
  );
}

const styleInformacion = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});
