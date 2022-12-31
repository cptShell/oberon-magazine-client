import techradar from '~/assets/img/partners/techradar.png';
import ninja from '~/assets/img/partners/ninja.png';
import kotaku from '~/assets/img/partners/kotaku.png';

type Review = {
  img: string;
  text: string;
};

export const reviews: Array<Review> = [
  {
    img: techradar,
    text: '“This is certainly a very neat idea, and the company is putting its money where its mouth is regarding the frame-rate estimations.”',
  },
  {
    img: ninja,
    text: '“Their BLD program translates hardware into performance. Finally, no one will ever wonder how good their computer will perform in the games they want to play.”',
  },
  {
    img: kotaku,
    text: '“There’s something lovely about having a PC that comes with a set of guaranteed predicted frames-per-second targets for the games I planned.”',
  },
];
