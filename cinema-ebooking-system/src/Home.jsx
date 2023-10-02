import { useState } from 'react'
//import React from 'react'
import Navbar from './components/Navbar.jsx'
import Main from './components/Feature.jsx'
import MovieList from './components/MovieList.jsx'
import Feature from './components/Feature.jsx'

export default function Home() {
return (
    <>
        <Navbar/>
        <Feature/>
        <MovieList name = "Now Showing"/>
        <MovieList name = "Coming Soon"/>
    </>
  )
}
