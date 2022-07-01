import { Text, FlatList, ScrollView } from "react-native";

export default function Episodios({ id, episode, name }) {
  return (
    <ScrollView>
      <Text>Estos son los episodios en que aparece {name}</Text>
      {
        <FlatList
          data={episode}
          key={id}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      }
    </ScrollView>
  );
}
