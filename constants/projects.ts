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
    url: 'https://folios.page',
    github: 'https://github.com/damafeez/portfolio.ng',
  },
  {
    image: fonto,
    title: 'Fonto',
    description:
      "I developed an image processing tool with VueJS and HTML Canvas. Fonto allows users to select an image, customize the text to overlay on it, and adjust various parameters to achieve the desired outcome. The output image can be previewed and saved on the user's computer.",
    technologies: ['vue', 'html', 'canvas', 'css3'],
    url: 'https://fonto.netlify.com',
    github: 'https://github.com/damafeez/fonto',
  },
  {
    image: simpleMusic,
    title: 'Simple Music',
    description:
      'As one of my earliest dabbles into Flutter, I built a music player with a beautiful interface.',
    technologies: ['flutter', 'dart', 'mobile'],
    url: 'https://play.google.com/store/apps/details?id=afeez.awoyemi.simple_music_player',
    github: 'https://github.com/damafeez/simple-music',
  },
  {
    image: wordleMobile,
    title: 'Wordle (mobile)',
    description:
      'Wordle needs no introduction! I built a feature-complete clone of the viral word game in react-native and typescript.',
    technologies: ['react', 'react-native', 'typescript'],
    github: 'https://github.com/damafeez/wordle-react-native',
  },
  {
    image: wordle,
    title: 'Wordle',
    description: 'A desktop version of the wordle clone, built with Vue.',
    technologies: ['vue', 'css3'],
    url: 'https://afeez-wordle-clone.netlify.app',
    github: 'https://github.com/damafeez/wordle',
  },
]

export default projects
