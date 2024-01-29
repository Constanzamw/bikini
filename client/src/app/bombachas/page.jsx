"use client"

import Nav from "../../components/Nav/Nav";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from "../../components/Filters/Filters";

let baseUrl ="http://localhost:3001"

export default function Bombachas() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/publications`)
      .then(response => {
        const bombachas = response.data.flatMap(item => {
          // Filtrar por categoría "BOMBACHAS"
          const filteredPublications = item.publications.filter(publication => publication.cat === "BOMBACHAS");
          // Verificar si hay publicaciones antes de acceder a las propiedades
          if (filteredPublications.length > 0) {
            // Organizar los tamaños disponibles
            const sizes = filteredPublications.map(publication => publication.size);
            return {
              name: item.name,
              description: filteredPublications[0].description,
              price: filteredPublications[0].price,
              image: filteredPublications[0].image,
              sizes: sizes
            };
          }
          return null;
        }).filter(Boolean); // Filtrar elementos nulos
        setPublications(bombachas);
      })
      .catch(error => console.error('Error fetching publications:', error));
  }, []);

  return (
    <div className="bg-gray-100 p-4">
      <Nav />
      <h1 className="text-4xl font-bold mb-4 text-center text-pink-400/40"> BOMBACHAS</h1>
      <div className="flex flex-wrap -mx-2">
        {publications.map(publication => (
          <div key={publication.name} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 text-black">{publication.name}</h2>
              {publication.description && <p className="mb-2 text-black">{publication.description}</p>}
              <img src={publication.image} alt={publication.name} className="max-w-full h-auto mb-2" />
              <p className="mb-2 text-black">Precio: {publication.price}</p>
              <p className="mb-2 text-black">Talles: {publication.sizes.sort((a, b) => a - b).join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}