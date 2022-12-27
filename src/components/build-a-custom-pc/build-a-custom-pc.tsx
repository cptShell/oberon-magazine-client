import { FC } from 'react';
import clsx from 'clsx';
import headingIMG from '~/assets/img/background/custom-pc-bg.avif';
import pcYellow from '~/assets/img/pc-yellow.png';
import fpsBar from '~/assets/img/fps-bar.png';
import pcPurple from '~/assets/img/common/boot-your-perfomance.png';
import transparentPricing from '~/assets/img/common/transparent-pricing.png';
import warranity from '~/assets/img/icon/warranity.svg';
import speedometer from '~/assets/img/icon/speedometer.svg';
import wrench from '~/assets/img/icon/wrench.svg';
import gpu from '~/assets/img/icon/gpu.svg';
import cpu from '~/assets/img/icon/cpu.svg';
import ram from '~/assets/img/icon/ram.svg';
import styles from './build-a-custom-pc.module.scss';

export const BuildACustomPC: FC<{}> = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['heading-container']}>
        <h2>Build A Custom PC</h2>
        <span>Custom PCs designed by you, built by us.</span>
        <button>Start Your PC Build</button>
      </div>
      <img src={headingIMG} />
      <div className={styles['build-wrapper']}>
        <div className={clsx(styles['ad-wrapper'], styles['first'])}>
          <div className={styles['ad-text-container']}>
            <h3>Why Build a Custom PC With Oberon?</h3>
            <span>
              Dive into our PC configurator and get the best framerate to push
              raw processing power from premium components. See in real time
              what FPS performance you'll get on some of the top games.
            </span>
          </div>
          <img src={pcYellow} />
        </div>
        <div className={clsx(styles['ad-wrapper'], styles['second'])}>
          <div className={styles['ad-text-container']}>
            <h3>Game Your Way</h3>
            <span>
              Whether it is 144hz at 1080p, 60hz at 4K, or anything
              in-between—we have you covered. Customize your PC to your exact
              specifications to push performance, resolution, and more.
            </span>
          </div>
          <img src={fpsBar} />
        </div>

        <div className={styles['build-grid']}>
          <div
            style={{ gridArea: 'a' }}
            className={clsx(styles['build-item'], styles['large'])}
          >
            <div className={styles['text-container']}>
              <h3>Built By Experts</h3>
              <span>
                Our highly-trained builders use top-rated components and
                professionally cable-manage your build.
              </span>
            </div>
            <img src={pcYellow} />
          </div>
          <div
            style={{ gridArea: 'b' }}
            className={clsx(styles['build-item'], styles['large'])}
          >
            <div className={styles['text-container']}>
              <h3>Transparent Pricing</h3>
              <span>
                We list everything that goes into your gaming PC and we display
                costs clearly so you know exactly what you're getting.
              </span>
            </div>
            <img className={styles['img-outranged']} src={transparentPricing} />
          </div>
          <div
            style={{ gridArea: 'c' }}
            className={clsx(styles['build-item'], styles['small'])}
          >
            <img src={wrench} />
            <h3>We Can BLD It</h3>
            <span>
              Our experts professionally build, fine-tune, and test to ensure
              your product is ready go.
            </span>
          </div>
          <div
            style={{ gridArea: 'd' }}
            className={clsx(styles['build-item'], styles['small'])}
          >
            <img src={warranity} />
            <h3>2-Year Warranty</h3>
            <span>
              Our 2-year warranty covers all parts and labor, and our
              award-winning customer service team is ready to help.
            </span>
          </div>
          <div
            style={{ gridArea: 'e' }}
            className={clsx(styles['build-item'], styles['small'])}
          >
            <img src={speedometer} />
            <h3>Fast Build Service</h3>
            <span>
              Our pros are ready to get started on your order immediately and
              ship in 48 hours.
            </span>
          </div>
        </div>
        <div className={styles['subtitle-container']}>
          <h2>Build Your Dream PC</h2>
          <span>
            Choose from a variety of components and focus on the parts that will
            make the perfect PC experience for you.
          </span>
        </div>
      </div>
      <div className={styles['perfomance-wrapper']}>
        <div className={styles['perfomance-container']}>
          <div className={styles['perfomance-description']}>
            <h2>Boost Your Performance</h2>
            <ul className={styles['perfomance-list']}>
              <li className={styles['perfomance-item']}>
                <img src={gpu} />
                <div className={styles['text-container']}>
                  <h3>GPU</h3>
                  <span>
                    The Graphics Processing Unit offers pure power to push
                    performance to new heights in the biggest games.
                  </span>
                </div>
              </li>
              <li className={styles['perfomance-item']}>
                <img src={cpu} />
                <div className={styles['text-container']}>
                  <h3>CPU</h3>
                  <span>
                    The Central Processing Unit multitasks as well as increases
                    performance in CPU-intensive games and helps avoid
                    bottlenecks.
                  </span>
                </div>
              </li>
              <li className={styles['perfomance-item']}>
                <img src={ram} />
                <div className={styles['text-container']}>
                  <h3>RAM</h3>
                  <span>
                    Random Access Memory enables you to run multiple programs at
                    once—the more RAM you have, the better you can multi-task.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <img src={pcPurple} />
        </div>
      </div>
    </div>
  );
};
