// Alle Inhalte der Seite an einer Stelle – hier Links und Texte anpassen.
import cover from '../assets/cover.jpg';

export const site = {
  artist: 'Reineke',
  title: 'Reineke – Zum Wohle der Musik',
  description:
    'Reineke – die neue EP „Zum Wohle der Musik“ jetzt auf Spotify und Apple Music hören.',
  ep: {
    title: 'Zum Wohle der Musik',
    cover,
    coverAlt:
      'Cover der EP „Zum Wohle der Musik“: drei Rapper telefonieren mit Bananen vor den Skylines von München, Köln und dem Ruhrgebiet',
    links: [
      {
        label: 'EP auf Spotify hören',
        href: 'https://open.spotify.com/intl-de/album/63xamqEIwCZcmNJM4cK5yH',
      },
      {
        label: 'EP auf Apple Music hören',
        href: 'https://music.apple.com/at/album/zum-wohle-der-musik-ep/6832681139',
      },
    ],
  },
  follow: [
    { icon: 'spotify', label: 'Spotify', href: 'https://open.spotify.com/intl-de/artist/4FvcpEeRom1jy3TbI9DcMb' },
    { icon: 'apple', label: 'Apple Music', href: 'https://music.apple.com/de/artist/reineke/1579920124' },
    { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/reineke_funk/' },
  ],
};
