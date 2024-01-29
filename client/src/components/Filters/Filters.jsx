"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicationsBySize } from "../../app/redux/features/size/sizeActions";
import { setSize } from "../../app/redux/features/size/sizeSlice";



export default function Filters() {
  const dispatch = useDispatch();
  const selectedSize = useSelector((state) => state.size.selectedSize);
  const filteredPublications = useSelector((state) => state.size.publications);

  const [localSize, setLocalSize] = useState('');

  useEffect(() => {
    // Cuando cambia el tamaño seleccionado, obtener las publicaciones filtradas
    if (localSize) {
      dispatch(fetchPublicationsBySize(localSize));
    }
  }, [localSize, dispatch]);

  const handleSizeChange = (size) => {
    // Actualizar el estado local con el nuevo tamaño
    setLocalSize(size);
    // No necesitas dispatch(setSize(size)) aquí porque ya lo haces en fetchPublicationsBySize
  };

  return (
    <div>
      <select className="text-black" onChange={(e) => handleSizeChange(e.target.value)}>
        <option value="">Talles</option>
        <option value="1">Talle 1</option>
        <option value="2">Talle 2</option>
        <option value="3">Talle 3</option>
        <option value="4">Talle 4</option>
        <option value="5">Talle 5</option>
      </select>
      {/* Renderizar las publicaciones filtradas */}
      <ul>
        {filteredPublications?.map((publication) => (
          <li key={publication.id}>
            <h2>{publication.name}</h2>
            <p>{publication.description}</p>
            <p>Precio: {publication.price}</p>
            <p>Talle: {publication.size}</p>
            <img src={publication.image} alt={publication.name} style={{ maxWidth: '200px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}