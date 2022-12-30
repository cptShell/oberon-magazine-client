import amd from '../../assets/img/partners/amd.png';
import asrock from '../../assets/img/partners/ASrock.png';
import asus from '../../assets/img/partners/asus.png';
import evga from '../../assets/img/partners/evga.png';
import gigabyte from '../../assets/img/partners/gigabyte.png';
import gskill from '../../assets/img/partners/gskill.png';
import intel from '../../assets/img/partners/intel.png';
import microsoft from '../../assets/img/partners/Microsoft.png';
import msi from '../../assets/img/partners/msi.png';
import nvidia from '../../assets/img/partners/nvidia.png';
import samsung from '../../assets/img/partners/samsung.png';
import seagate from '../../assets/img/partners/seagate.png';
import seasonic from '../../assets/img/partners/seasonic.png';
import teamgroup from '../../assets/img/partners/teamgroup.png';
import westernDigital from '../../assets/img/partners/westernDigital.png';

type Partner = {
  src: string;
  link: string;
};

export const partners: Array<Partner> = [
  { src: amd, link: 'https://www.amd.com/' },
  { src: asrock, link: 'https://www.asrock.com/' },
  { src: asus, link: 'https://www.asus.com/' },
  { src: evga, link: 'https://eu.evga.com/' },
  { src: gigabyte, link: 'https://www.gigabyte.com/' },
  { src: gskill, link: 'https://www.gskill.com/' },
  { src: intel, link: 'https://www.intel.com/' },
  { src: microsoft, link: 'https://www.microsoft.com/' },
  { src: msi, link: 'https://ru.msi.com/' },
  { src: nvidia, link: 'https://www.nvidia.com/' },
  { src: samsung, link: 'https://www.samsung.com/' },
  { src: seagate, link: 'https://www.seagate.com/' },
  { src: seasonic, link: 'https://seasonic.com/' },
  { src: teamgroup, link: 'https://www.teamgroupinc.com/' },
  { src: westernDigital, link: 'https://www.westerndigital.com/' },
];
