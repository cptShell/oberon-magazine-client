import AIOCooler from '~/assets/img/computer-part/aio-cooler.png';
import airCooler from '~/assets/img/computer-part/air-cooler.png';
import pcCase from '~/assets/img/computer-part/case.png';
import cpu from '~/assets/img/computer-part/cpu.png';
import gpu from '~/assets/img/computer-part/gpu.png';
import motherboard from '~/assets/img/computer-part/motherboard.png';
import psu from '~/assets/img/computer-part/psu.png';
import ram from '~/assets/img/computer-part/ram.png';
import ssd from '~/assets/img/computer-part/ssd.png';
import wifi from '~/assets/img/computer-part/wi-fi.png';

type Part = {
  img: string;
  title: string;
  subtitle: string;
  description: string;
};

export const parts: Array<Part> = [
  {
    img: pcCase,
    title: 'Case',
    subtitle: 'The house. This is where everything lives!',
    description:
      'The case is an aesthetically pleasing home for all your PC components. Oberon cases have channels to allow for clean cable management and an easy build. The case also serves as an electrical current ground for all of your components.',
  },
  {
    img: motherboard,
    title: 'Motherboard',
    subtitle:
      'The translator. The connector. The motherboard gets everything talking.',
    description:
      'The motherboard is responsible for distributing power from your PSU to the other components.',
  },
  {
    img: cpu,
    title: 'CPU',
    subtitle: 'The brain. The CPU does the thinking.',
    description:
      'The CPU, or Central Processing Unit, is responsible for taking your request and delegating tasks to various components to be executed.',
  },
  {
    img: ram,
    title: 'RAM',
    subtitle:
      'The desk space. RAM affects the number of tasks that can be efficiently processed at once.',
    description:
      'RAM is responsible for pulling programs or files from mass storage into active use. The RAM will pull data from applications in use, acting as the short-term memory.',
  },
  {
    img: ssd,
    title: 'SSD',
    subtitle: 'The garage. This is where you store your stuff.',
    description:
      'The SSD is a fast and efficient way to store and access games, apps, files, and more on your computer. SSD stands for solid-state drive, meaning it has no moving parts, which in turn offers less wear and tear, as well as faster access to your stuff.',
  },
  {
    img: psu,
    title: 'PSU',
    subtitle:
      'The engine. A PSU pulls, conditions, and sends power to your components.',
    description:
      'A common misconception is that the PSU provides power to the PC. It actually converts the high voltage alternating current (AC) power from your wall outlet to a more manageable direct current (DC). It then regulates the DC output to the different areas of your PC depending on power needs and requirements.',
  },
  {
    img: airCooler,
    title: 'Air Cooler',
    subtitle: 'The A/C unit. Keeps your house cool.',
    description:
      'An air cooler mounts to your CPU and uses 1 or 2 fans to move air through a series of thin metal fins. These metal fins house the heat given off by your CPU when it is under load.',
  },
  {
    img: AIOCooler,
    title: 'AIO Cooler',
    subtitle: 'The Refrigerator. Keeps your CPU running cool.',
    description:
      'An All in One cooler is a preassembled pump and radiator combination. The pump pushes a liquid cooling solution through a cold plate mounted on the CPU, which allows the heat from the CPU to be transferred into the liquid, which is then moved to the radiator, which is then cooled by the fans mounted to it. This cycle continues to keep your CPU cool.',
  },
  {
    img: gpu,
    title: 'GPU',
    subtitle:
      'The turbocharger. The GPU makes your computer tear through heavy visual loads.',
    description:
      'The GPU is in charge of processing all of the visual data of a game or application.',
  },
  {
    img: wifi,
    title: 'Wi-Fi',
    subtitle: 'The communications relay.',
    description:
      'The Wi-Fi card allows you to access your home Wifi network wirelessly.',
  },
];
