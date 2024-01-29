"use client"
import Link from "next/link";
import Nav from "../../components/Nav/Nav";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

let baseUrl ="http://localhost:3001"

export default function Kids () {

  const [publications, setPublications]= useState([])

  useEffect(()=>{
    axios.get(`${baseUrl}/publications`)
    .then( response => {
      const bombachas = response.data.filter(publication => publication.cat === "KIDS")
      setPublications(bombachas)
    })
    .catch(error => console.error('Error fetching publications:', error));
  },[])


  return (
    <div className="bg-gray-100 p-4">
      <Nav />
      {/* <Filters /> */}
      <h1 className="text-4xl font-bold mb-4 text-center text-pink-400/40"> KIDS</h1>
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
