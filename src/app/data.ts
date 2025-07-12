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
  trailerUrl?: string;
}

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "The Happy Times",
    release_date: "2021-07-12",
    genre: "Feel Good",
    vote_average: 7.8,
    poster_path: "assets/happy-times.png",
    overview: "A heartwarming story of friendship, laughter, and unexpected adventures.",
    cast: ["Anna Bright", "John Cheer", "Ella Smile"],
    similar: [2, 7, 9],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "The 12 Angry Man",
    release_date: "2021-06-12",
    genre: "Feel Good",
    vote_average: 8.3,
    poster_path: "assets/twelve.jpg",
    overview: "Intense courtroom debates unravel personal struggles.",
    cast: ["Mark Stern", "Henry Bold", "Grace Lyon"],
    similar: [1, 3, 8],
  },
  {
    id: 3,
    title: "The Redemption",
    release_date: "2020-05-12",
    genre: "Feel Good",
    vote_average: 8.7,
    poster_path: "assets/redem.jpg",
    overview: "An ex-convict seeks redemption and a chance at a new life.",
    cast: ["Sam Hope", "Laura Cross", "Pete Sharp"],
    similar: [2, 4, 9],
  },
  {
    id: 4,
    title: "Fast Strike",
    release_date: "2022-02-18",
    genre: "Action Fix",
    vote_average: 8.2,
    poster_path: "assets/fast-strike.jpg",
    overview: "Non-stop action with breathtaking stunts and fierce battles.",
    cast: ["Mike Rush", "Sarah Blaze", "Tom Flash"],
    similar: [5, 6, 7],
  },
  {
    id: 5,
    title: "Matrix",
    release_date: "2022-02-18",
    genre: "Action Fix",
    vote_average: 7.4,
    poster_path: "assets/matrix.jpg",
    overview: "A hacker uncovers a hidden reality and fights for freedom.",
    cast: ["Neo Hack", "Trinity Code", "Morpheus"],
    similar: [4, 6, 8],
  },
  {
    id: 6,
    title: "Fight Club",
    release_date: "2022-02-18",
    genre: "Action Fix",
    vote_average: 8.5,
    poster_path: "assets/fightclub.jpg",
    overview: "An insomniac and a soap salesman form an underground club.",
    cast: ["Tyler Chaos", "Jack Smith", "Mara Vex"],
    similar: [5, 7, 9],
  },
  {
    id: 7,
    title: "Mind Maze",
    release_date: "2020-10-03",
    genre: "Mind Benders",
    vote_average: 7.9,
    poster_path: "assets/fast&f.jpg",
    overview: "A detective is caught in a twisting puzzle that tests reality.",
    cast: ["Liam Puzzler", "Jane Twist", "Olivia Loop"],
    similar: [1, 6, 8],
  },
  {
    id: 8,
    title: "Dark Knight",
    release_date: "2022-05-23",
    genre: "Mind Benders",
    vote_average: 9.0,
    poster_path: "assets/darkknight.jpg",
    overview: "A vigilante battles crime to save his city from chaos.",
    cast: ["Bruce Shade", "Selina Noir", "Harvey Vale"],
    similar: [2, 5, 7],
  },
  {
    id: 9,
    title: "God Father",
    release_date: "2022-10-13",
    genre: "Mind Benders",
    vote_average: 9.2,
    poster_path: "assets/godfather.jpg",
    overview: "The epic rise and rule of a powerful crime family.",
    cast: ["Vito Corelli", "Michael Corelli", "Tom Hagen"],
    similar: [1, 3, 6],
  }
];
