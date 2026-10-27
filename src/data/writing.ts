/** Links and part order confirmed by the author; dates and subtitles from each Substack post. */
export interface ExternalArticle {
  title: string;
  description?: string;
  url: string;
  date?: string;
  source: string;
}

export const writingSeries = {
  title: 'Juicing with AI in Fantasy Football',
  description: 'An unusual fantasy football league sends me down a rabbit hole of AI, statistics, and decision-making. A three-part account of the experiment.',
  image: 'https://substack-post-media.s3.amazonaws.com/public/images/95ac5416-be7a-47c2-8256-23b9a2f8dbc8_1024x1024.png',
  imageAlt: 'Hallucinating Touchdowns fantasy football team logo, from Part 1 of the series',
};

export const externalArticles: ExternalArticle[] = [
  {
    title: 'Juicing with AI in Fantasy Football: Part 1',
    url: 'https://dhruvgblog.substack.com/p/juicing-with-ai-in-fantasy-football',
    source: 'Substack',
    date: '2025-11-22',
    description: 'An experiment with AI, statistics and football.',
  },
  {
    title: 'Juicing with AI in Fantasy Football: Part 2',
    url: 'https://dhruvgblog.substack.com/p/juicing-with-ai-in-fantasy-football-f4e',
    source: 'Substack',
    date: '2025-12-28',
    description: 'Discovering an exploit',
  },
  {
    title: 'Juicing with AI in Fantasy Football: Part 3',
    url: 'https://dhruvgblog.substack.com/p/juicing-with-ai-in-fantasy-football-bef',
    source: 'Substack',
    date: '2026-01-18',
    description: 'Using AI and data to validate my fantasy football hunch',
  },
];
