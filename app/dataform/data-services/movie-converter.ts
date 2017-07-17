import { PropertyConverter } from "nativescript-telerik-ui-pro/dataform";
import { Movie } from "./movie";

export class MovieConverter implements PropertyConverter {
    constructor(private _movies: Array<Movie>) { }
    
    convertFrom(id: number) {
        return this._movies.filter((movie: Movie) => movie.id == id)[0].name;
    }

    convertTo(name: string) {
        return this._movies.filter((movie: Movie) => movie.name == name)[0].id;
    }
}