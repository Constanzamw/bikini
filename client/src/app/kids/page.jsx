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
    <div>
      <Nav/>
      <h1>KIDS</h1>
      <ul>
        {publications.map(publication => (
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
};
