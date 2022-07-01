import {
  GET_PERSONAJES,
  DETALLE_PERSONAJE,
  BUSCAR_PERSONAJE,
} from "../actions";

const initialState = {
  personajesCargados: [],
  detallePersonaje: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PERSONAJES:
      return {
        ...state,
        personajesCargados: action.payload,
      };
    case DETALLE_PERSONAJE:
      return {
        ...state,
        detallePersonaje: action.payload,
      };
    case BUSCAR_PERSONAJE:
      return {
        ...state,
        personajesCargados: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
