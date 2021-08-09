import { TvSeriesSchedule } from './tv-series-schedule.model';

export const tvSeriesScheduleApiDataMock: TvSeriesSchedule[] = [
  {
    id: 2044712,
    url: 'https://www.tvmaze.com/episodes/2044712/sesame-street-51x13-elmo-and-the-healthy-heroes',
    name: 'Elmo and the Healthy Heroes',
    season: 51,
    number: 13,
    type: 'regular',
    airdate: '2021-02-04',
    airtime: '',
    airstamp: '2021-02-04T17:00:00+00:00',
    runtime: 30,
    image: null,
    summary: null,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/episodes/2044712',
      },
    },
    _embedded: {
      show: {
        id: 6544,
        url: 'https://www.tvmaze.com/shows/6544/sesame-street',
        name: 'Sesame Street',
        type: 'Scripted',
        language: 'English',
        genres: ['Children'],
        status: 'Running',
        runtime: 30,
        averageRuntime: 53,
        premiered: '1969-11-10',
        officialSite:
          'https://www.hbomax.com/series/urn:hbo:series:GXouLWwp8MsPDIgEAAAqT',
        schedule: {
          time: '',
          days: ['Thursday'],
        },
        rating: {
          average: 8.2,
        },
        weight: 66,
        network: null,
        webChannel: {
          id: 329,
          name: 'HBO Max',
          country: {
            name: 'United States',
            code: 'US',
            timezone: 'America/New_York',
          },
        },
        dvdCountry: null,
        externals: {
          tvrage: 5152,
          thetvdb: 78419,
          imdb: 'tt0063951',
        },
        image: {
          medium:
            'https://static.tvmaze.com/uploads/images/medium_portrait/222/555972.jpg',
          original:
            'https://static.tvmaze.com/uploads/images/original_untouched/222/555972.jpg',
        },
        summary:
          '<p><b>Sesame Street</b> is a widely recognized and perpetually daring experiment in educational children\'s programming. This show has taken popular-culture and turned it upside-down. The fast-paced advertisements that had parents of the new era worrying for their children were the basis for the original format of this show. The show has often satirized pop culture, and made itself easier for parents to watch along too. And thus, the positive impact this show has had on modern society is beyond another. No show is more recognized the world over by as many generations and walks of life. Shown in its original format or with changes to reflect a regional education focus, Sesame Street is now seen in over 140 countries. The show that Entertainment Weekly named the "20th Best Ever Show" has changed the education scene to focus on "entertainment". This has turned out to be a valuable theory that not only...</p>',
        updated: 1615451215,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/6544',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/2044717',
          },
        },
      },
    },
  },
];
