import folios from '../public/folios.png'
import wordle from '../public/wordle.png'
import wordleMobile from '../public/wordle-mobile.png'
import simpleMusic from '../public/simple-music-2.png'
import fonto from '../public/fonto.png'

const projects = [
  {
    image: folios,
    title: 'Folios',
    description:
      'I had an idea to build an open-source template engine for generating portfolio sites, suitable for devs, designers, photographers and artists. Folios is still work in progress.',
    technologies: ['vue', 'nuxt', 'tailwind'],
    url: 'https://folios.page/',
    github: 'https://github.com/damafeez/portfolio.ng',
  },
  {
    image: fonto,
    title: 'Fonto',
    description:
      'I built an image processing tool with Vue and HTML Canvas for overlaying text on photos. Fonto allows you to upload an image, customize the text to ovrlay on it, tweak some parameters until the desired outcome is reached, then download output image.',
    technologies: ['vue', 'html', 'canvas', 'css3'],
    url: 'https://fonto.netlify.com/',
    github: 'https://github.com/damafeez/fonto',
  },
  {
    image: simpleMusic,
    title: 'Simple Music',
    description:
      'A simple music player with a beautiful interface. A simple music player with a beautiful interface.',
    technologies: ['flutter', 'dart', 'mobile'],
    url: 'https://play.google.com/store/apps/details?id=afeez.awoyemi.simple_music_player',
    github: 'https://github.com/damafeez/simple-music',
  },
  {
    image: wordleMobile,
    title: 'Wordle (mobile)',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ipsam error, fuga alias assumenda commodi reiciendis numquam ducimus atque uaerat modi beatae ratione in',
    technologies: ['react', 'react-native', 'typescript'],
    github: 'https://github.com/damafeez/wordle-react-native',
  },
  {
    image: wordle,
    title: 'Wordle',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ipsam error, fuga alias assumenda commodi reiciendis numquam ducimus atque uaerat modi beatae ratione in',
    technologies: ['vue', 'css3'],
    url: 'https://wordle-clone.netlify.app/',
    github: 'https://github.com/damafeez/wordle',
  },
]

export default projects
