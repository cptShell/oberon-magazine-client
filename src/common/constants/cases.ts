import nemesisRed from '~/assets/img/case/nemesis-red.png';
import nemesisYellow from '~/assets/img/case/nemesis-yellow.png';
import nemesisWhite from '~/assets/img/case/nemesis-white.png';
import { Case } from '../types/case';

export const PCCases: Array<Case> = [
  {
    title: 'Nemesis',
    type: 'Full-tower',
    color: 'black&red',
    colorHex: '#BEBA56',
    imgSrc: nemesisRed,
  },
  {
    title: 'Nemesis',
    type: 'Full-tower',
    color: 'black&yellow',
    colorHex: '#FFFFFF',
    imgSrc: nemesisYellow,
  },
  {
    title: 'Nemesis',
    type: 'Full-tower',
    color: 'black&white',
    colorHex: '#C8102E',
    imgSrc: nemesisWhite,
  },
];
