import { FC } from 'react';
import {
  communityGallery,
  headquatersList,
  holidayList,
  importantList,
  usefulList,
} from '~/common/constants/constants';
import collage from '~/assets/img/community/collage.png';
import styles from './community.module.scss';
import { Footer } from '../build-a-custom-pc/sections/sections';

export const Community: FC<{}> = () => {
  return (
    <div className={styles['community-wrapper']}>
      <div className={styles['community-container']}>
        <div className={styles['community-header']}>
          <div className={styles['community-title']}>
            <h2>Our purpose is to serve the PC gaming community.</h2>
            <span>
              We are relentless in making the experience achievable and seamless
              for everyone.
            </span>
          </div>
          <img src={collage} />
        </div>
        <div className={styles['important-container']}>
          <h3>What's Important to Us</h3>
          <ul className={styles['important-list']}>
            {importantList.map(({ title, description }, index) => {
              return (
                <li className={styles['important-item']} key={index}>
                  <h4>{title}</h4>
                  <span>{description}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className={styles['community-gallery']}>
          {communityGallery.map((src) => (
            <img src={src} />
          ))}
        </ul>
        <div className={styles['support-container']}>
          <h3>We're here to support you</h3>
          <div className={styles['support-content']}>
            <div className={styles['socials-container']}>
              <div className={styles['headquaters-container']}>
                <h4>Headquarters</h4>
                <ul className={styles['headquaters-list']}>
                  {headquatersList.map(({ title, description }, index) => {
                    return (
                      <li className={styles['headquaters-item']} key={index}>
                        <h5>{title}</h5>
                        <span>{description}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={styles['customer-container']}>
                <h4>Customer Support Hours</h4>
                <div className={styles['customer-content']}>
                  <div className={styles['worktime-container']}>
                    <h5>Monday - Friday:</h5>
                    <span> 8:00AM - 6:00PM PST</span>
                  </div>
                  <div className={styles['holiday-container']}>
                    <h5>Holiday Schedule</h5>
                    <ul className={styles['holiday-list']}>
                      {holidayList.map((holiday) => (
                        <li>{holiday}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles['customer-description']}>
                    Due to Covid-19, our support team is currently operating
                    under reduced staffing. Our temporary hours are 8AM to 6PM
                    PST. Thank you for your patience! 💜
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['useful-container']}>
              {usefulList.map(({ title, description, link }, index) => (
                <div className={styles['useful-item']}>
                  <div>
                    <h5>{title}</h5>
                    <span>{description}</span>
                  </div>
                  <span>{link}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
