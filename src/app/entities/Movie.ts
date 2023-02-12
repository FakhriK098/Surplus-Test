export interface IMovie {
    BackdropPath?: string;
    Id?: number;
    OriginalTitle?: string;
    OriginalLanguage?: string;
    Overview?: string;
    PosterPath?: string;
    ReleaseDate?: string;
    VoteAverange?: number
}

export interface MovieList {
    getMovie: IMovie[]
}

export interface IGenre {
    Id: number,
    Name: string,
}