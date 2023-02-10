export type Movie = {
  _id: string
  plot: string
  genres: string[]
  runtime: string
  cast: string[]
  num_mflix_comments: string
  title: string
  fullplot: string
  countries: string[]
  released: string
  directors: string[]
  rated: string
  awards: {
    wins: string
    nominations: string
    text: string
  }
  lastupdated: string
  year: string
  imdb: {
    rating: string
    votes: string
    id: string
  }
  type: string
  tomatoes: {
    viewer: {
      rating: string
      numReviews: string
      meter: string
    }
    lastUpdated: string
  }
}
