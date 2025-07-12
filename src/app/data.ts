export interface Movie {
  id: number;
  title: string;
  release_date: string;
  genre: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  cast: string[];
  similar: number[];
}



export const MOVIES = [
  {
    id: 1,
    title: "The Happy Times",
    release_date: "2021-07-12",
    genre: "Feel Good",
    vote_average: 7.8,
    
    poster_path: "assets/happy-times.png",
    overview: "A heartwarming story of friendship and joy.",
    cast: ["Anna Bright", "John Cheer"],
    similar: [2, 3],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  {
    id: 2,
    title: "Fast Strike",
    release_date: "2022-02-18",
    genre: "Action Fix",
    vote_average: 8.2,
    poster_path: "assets/fast-strike.jpg",
    overview: "Explosive action and thrilling car chases.",
    cast: ["Mike Rush", "Sarah Blaze"],
    similar: [1, 3],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  {
    id: 3,
    title: "Mind Maze",
    release_date: "2020-10-03",
    genre: "Mind Benders",
    vote_average: 7.5,
    poster_path: "assets/fast&f.jpg",
    overview: "A detective tries to solve a mystery that bends reality.",
    cast: ["Liam Puzzler", "Jane Twist"],
    similar: [1, 2],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  }
];
