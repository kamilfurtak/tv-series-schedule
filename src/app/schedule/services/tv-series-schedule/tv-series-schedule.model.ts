export interface Image {
  medium: string;
  original: string;
}

export interface Self {
  href: string;
}

export interface Links {
  self: Self;
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average?: number;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
}

export interface Country2 {
  name: string;
  code: string;
  timezone: string;
}

export interface WebChannel {
  id: number;
  name: string;
  country: Country2;
}

export interface Externals {
  tvrage?: number;
  thetvdb: number;
  imdb: string;
}

export interface Image2 {
  medium: string;
  original: string;
}

export interface Self2 {
  href: string;
}

export interface Previousepisode {
  href: string;
}

export interface Nextepisode {
  href: string;
}

export interface Links2 {
  self: Self2;
  previousepisode: Previousepisode;
  nextepisode?: Nextepisode;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: WebChannel;
  dvdCountry?: any;
  externals: Externals;
  image: Image2;
  summary: string;
  updated: number;
  _links: Links2;
}

export interface Embedded {
  show: Show;
}

export interface TvSeriesSchedule {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: Image | null;
  summary: string | null;
  _links: Links;
  _embedded: Embedded;
}
