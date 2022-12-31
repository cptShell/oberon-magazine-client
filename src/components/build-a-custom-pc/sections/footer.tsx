import { FC } from 'react';
import facebook from '~/assets/img/socials/facebook.svg';
import twitter from '~/assets/img/socials/twitter.svg';
import instagram from '~/assets/img/socials/instagram.svg';
import youtube from '~/assets/img/socials/youtube.svg';
import tiktok from '~/assets/img/socials/tiktok.svg';
import twitch from '~/assets/img/socials/twitch.svg';
import reddit from '~/assets/img/socials/reddit.svg';
import discord from '~/assets/img/socials/discord.svg';
import styles from '../build-a-custom-pc.module.scss';

const socials = [
  facebook,
  twitter,
  instagram,
  youtube,
  twitch,
  reddit,
  tiktok,
  discord,
];

export const Footer: FC<{}> = () => {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer-heading']}>
        <ul className={styles['social-list']}>
          {socials.map((img, index) => (
            <li key={index}>
              <a href="#">
                <img src={img} />
              </a>
            </li>
          ))}
        </ul>
        <div className={styles['control-panel']}>
          <div className={styles['control-container']}>
            <span>Language</span>
            <div>English</div>
          </div>
          <div className={styles['control-container']}>
            <span>Country</span>
            <div>United States</div>
          </div>
        </div>
      </div>
      <div className={styles['rules-container']}>
        <span>Oberon Lab`s</span>
        <ul>
          <li>© Oberon Lab`s Inc. 2022 All Rights Reserved</li>
          <li>Legal</li>
          <li>Privacy Policy</li>
          <li>Manage Cookie Preferences</li>
        </ul>
      </div>
    </div>
  );
};
