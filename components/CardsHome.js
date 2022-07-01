import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function CardsHome({ image, name, species, id }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Detalle", { id })}
    >
      <Image style={styles.img} source={{ uri: image }} />
      <Text>{name}</Text>
      <Text>{species}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 80,
    backgroundColor: "white",
    borderRadius: 5,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});
