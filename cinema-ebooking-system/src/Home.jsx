import { useState } from 'react'
//import React from 'react'
import Navbar from './components/Navbar.jsx'
import MovieList from './components/MovieList.jsx'
import Feature from './components/Feature.jsx'
import MovieData from './MovieData.jsx'

export default function Home() {
return (
    <>
        <Navbar/>
        <Feature/>
        <MovieList name = "Now Showing" list={MovieData}/>
        <MovieList name = "Coming Soon" list={MovieData}/>
    </>
  )
}
