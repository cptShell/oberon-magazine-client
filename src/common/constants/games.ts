import gtaV from '~/assets/img/game/gtav-game-logo.png';
import fortnite from '~/assets/img/game/fortnite.png';
import minecraft from '~/assets/img/game/minecraft-logo.png';
import modernWarfare from '~/assets/img/game/modern-warfare-alt.png';

type GameData = {
  title: string;
  imgSrc: string;
  fpsRatio: number;
};

export const gameDataList: Array<GameData> = [
  { title: 'Grand Theft Auto V', imgSrc: gtaV, fpsRatio: 86 },
  { title: 'Call Of Duty: MW', imgSrc: modernWarfare, fpsRatio: 104 },
  { title: 'Fortnite', imgSrc: fortnite, fpsRatio: 151 },
  { title: 'Minecraft', imgSrc: minecraft, fpsRatio: 231 },
];
