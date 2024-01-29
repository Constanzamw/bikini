"use client"

import Nav from "../../components/Nav/Nav";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from "../../components/Filters/Filters";

let baseUrl ="http://localhost:3001"

export default function Bombachas() {

  const [publications, setPublications]= useState([])

  useEffect(()=>{
    axios.get(`${baseUrl}/publications`)
    .then( response => {
      const bombachas = response.data.filter(publication => publication.cat === "BOMBACHAS")
      setPublications(bombachas)
    })
    .catch(error => console.error('Error fetching publications:', error));
  },[])


  return (
    <div className="bg-gray-100 p-4">
      <Nav />
      {/* <Filters /> */}
      <h1 className="text-4xl font-bold mb-4 text-center text-pink-400/40"> BOMBACHAS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {publications.map(publication => (
          <div key={publication.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2 text-black">{publication.name}</h2>
            <p className="mb-2 text-black">{publication.description}</p>
            <img src={publication.image} alt={publication.name} className="max-w-full h-auto mb-2" />
            <p className="mb-2 text-black">Precio: {publication.price}</p>
            <p className="mb-2 text-black">Talle: {publication.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
}