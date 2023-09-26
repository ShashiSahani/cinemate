import React from "react";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { MovieDetails } from "./MovieDetails";

export const MovieList = () => {
  return (
    <main>
      <Header />
      <MovieDetails/>
      <Footer/>
    </main>
  );
};
