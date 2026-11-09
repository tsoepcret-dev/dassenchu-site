import episodeData from './episodes.json';

export const name = '英会話、脱線中。';
export const spotify = 'https://open.spotify.com/show/4piCml1DIuAoVKLmwbm5CI';
export const youtube = 'https://www.youtube.com/playlist?list=PLfBmtBzv8A3M';
export const primaryNav = [
  { href: '/podcast/', label: 'Podcast' },
  { href: '/learn/', label: '無料教材' },
  { href: '/apps/', label: '英会話アプリ' },
];
export const infoNav = [
  { href: '/about/', label: '運営情報' },
  { href: '/privacy/', label: 'プライバシー' },
  { href: '/contact/', label: 'お問い合わせ' },
];

export type Episode = {
  number: number;
  title: string;
  summary: string;
  spotify: string;
  youtube?: string;
};

export const episodes: Episode[] = episodeData;
export const episodeLabel = (number: number) => 'EP' + String(number).padStart(3, '0');
