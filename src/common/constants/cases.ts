import { Case } from '../types/case';
import nemesisRed from '~/assets/img/case/nemesis-red.png';
import nemesisYellow from '~/assets/img/case/nemesis-yellow.png';
import nemesisWhite from '~/assets/img/case/nemesis-white.png';
import lunarisViolet from '~/assets/img/case/lunaris-violet.png';
import novaGreen from '~/assets/img/case/nova-green.png';

export const PCCases: Array<Case> = [
  {
    title: 'Nemesis',
    type: 'Full-tower',
    mainHex: '#000000',
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
  {
    title: 'Lunaris',
    type: 'Full-tower',
    mainHex: '#FFFFFF',
    colors: [{ title: 'black&violet', hex: '#FFFFFF', imgSrc: lunarisViolet }],
  },
  {
    title: 'Nova',
    type: 'Full-tower',
    mainHex: '#000000',
    colors: [{ title: 'black&violet', hex: '#3D7E43', imgSrc: novaGreen }],
  },
];
