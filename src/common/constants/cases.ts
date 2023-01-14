import { Case } from '../types/case';
import nemesisRed from '~/assets/img/case/nemesis-red.png';
import nemesisYellow from '~/assets/img/case/nemesis-yellow.png';
import nemesisWhite from '~/assets/img/case/nemesis-white.png';

export const PCCases: Array<Case> = [
  {
    title: 'Nemesis',
    type: 'Full-tower',
    colors: [
      {
        title: 'black&red',
        hex: '#C8102E',
        imgSrc: nemesisRed,
      },
      {
        title: 'black&yellow',
        hex: '#BEBA56',
        imgSrc: nemesisYellow,
      },
      {
        title: 'black&white',
        hex: '#FFFFFF',
        imgSrc: nemesisWhite,
      },
    ],
  },
];
