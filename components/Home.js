import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import CardsHome from "./CardsHome";
import { buscarPersonaje, getPersonajes } from "../actions";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const personajes = useSelector((state) => state.personajesCargados);

  useEffect(() => {
    dispatch(getPersonajes());
    setLoading(false);
  }, [dispatch]);

  function searchCharacter() {
    if (search) {
      setLoading(true);
      dispatch(buscarPersonaje(search));
      setLoading(false);
    } else {
      dispatch(getPersonajes());
    }
  }

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View>
          <Searchbar
            placeholder="Search for character..."
            onChangeText={(value) => setSearch(value)}
            value={search}
            onIconPress={searchCharacter}
            onSubmitEditing={searchCharacter}
          />
          <FlatList
            data={personajes.results}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardsHome
                id={item.id}
                image={item.image}
                name={item.name}
                species={item.species}
              />
            )}
          />
        </View>
      )}
    </View>
  );
}
