import type { Episode } from './site';
import { episodes, episodeLabel } from './site';

type TranscriptLine = {
  speaker: 'MARK' | 'MIKA';
  spoken: 'en' | 'ja';
  en: string;
  ja: string;
};

const transcripts = import.meta.glob<TranscriptLine[]>('./transcripts/*.json', {
  eager: true,
  import: 'default',
});

export const transcriptSlug = (episode: Episode) => episodeLabel(episode.number).toLowerCase();
export const transcriptFor = (episode: Episode) => transcripts['./transcripts/' + transcriptSlug(episode) + '.json'];
export const transcriptEpisodes = episodes.filter(transcriptFor);
export const transcriptHref = (episode: Episode) => '/learn/' + transcriptSlug(episode) + '/';
