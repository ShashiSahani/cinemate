import { Route, Routes } from "react-router-dom";
import { MovieDetails, MovieList, PageNotFound, Search } from "../pages";
import React from "react";

export function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="movies/top" element={<MovieList />} />

        <Route path="movies/popular" element={<MovieList />} />
        <Route path="movies/upcoming" element={<MovieList />} />
        <Route path="Search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}


