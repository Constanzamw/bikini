import {
  setSize,
  setPublications
  // getAppointment
} from "./sizeSlice";
import axios from "axios";

const URL_BASE = "http://localhost:3001";


export const fetchPublicationsBySize = (size) => async (dispatch) => {
  try {
    // Obtener todas las publicaciones
    const response = await axios.get(`${URL_BASE}/publications`);
    const allPublications = response.data;

    // Filtrar las publicaciones por el tamaño deseado
    const filteredPublications = allPublications.filter(
      (publication) => publication.size === size
    );

    // Despachar la acción para establecer el tamaño seleccionado
    dispatch(setSize(size));

    // Despachar la acción para establecer las publicaciones filtradas
    dispatch(setPublications(filteredPublications));

  } catch (error) {
    // Manejar errores si es necesario
    console.error("Error al obtener las publicaciones:", error);
  }
};