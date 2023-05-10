export interface NewFilmType {
location?: string;
description?: string;
id?: string;
name?: string;
stars?: string;
year?: string;
}

export interface AddFilmType {
  location: string;
  description: string;
  name: string;
  stars: string;
  year: string;
}