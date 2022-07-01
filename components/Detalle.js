import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import Episodios from "./Episodios";
import Informacion from "./Informacion";
import { useDispatch, useSelector } from "react-redux";
import { detallePersonaje } from "../actions";

const Tab = createBottomTabNavigator();

export default function Detalle({ route }) {
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const detalle = useSelector((state) => state.detallePersonaje);

  useEffect(() => {
    dispatch(detallePersonaje(route.params.id));
    setLoading(false);
  }, []);

  return (
    <Tab.Navigator initialRouteName="Informacion">
      <Tab.Screen
        name="Informacion"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-circle"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator size="large" color="green" />
          ) : (
            <Informacion image={detalle.image} name={detalle.name} />
          )
        }
      </Tab.Screen>
      <Tab.Screen
        name="Episodios"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="tv-outline"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator size="large" color="green" />
          ) : (
            <Episodios
              id={detalle.id}
              name={detalle.name}
              episode={detalle.episode}
            />
          )
        }
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const styleDetalle = StyleSheet.create({
  img: {
    with: 300,
    height: 300,
  },
});
