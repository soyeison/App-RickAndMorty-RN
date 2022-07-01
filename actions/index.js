import axios from "axios";
export const GET_PERSONAJES = "GET_PERSONAJES";
export const DETALLE_PERSONAJE = "DETALLE_PERSONAJE";
export const BUSCAR_PERSONAJE = "BUSCAR_PERSONAJE";

export function getPersonajes() {
  return function (dispatch) {
    return axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        dispatch({ type: GET_PERSONAJES, payload: response.data });
      });
  };
}

export function detallePersonaje(id) {
  return function (dispatch) {
    return axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        dispatch({ type: DETALLE_PERSONAJE, payload: response.data });
      });
  };
}

export function buscarPersonaje(nombre) {
  return function (dispatch) {
    return axios
      .get(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
      .then((response) => {
        dispatch({ type: BUSCAR_PERSONAJE, payload: response.data });
      });
  };
}
