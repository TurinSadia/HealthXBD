// components/Hero.js
import React from 'react';
import Image from 'next/image'; // Importing the Next.js Image component
import styles from '@/app/page.module.css'; // Import styles from page.module.css

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Left Column */}
              <div className={styles.leftCol}>
                   <div className={styles.contents}>
          <div className={styles.imageContainer}>
            <Image
              src="/Group 2.png" // Replace with your image path
              alt="Hero Image"
              width={30} // Set the width of the image
              height={30} // Set the height of the image
              className={styles.heroImage}
            />
          </div>
                      <p className={styles.subText}>24/7 Emergency Service</p>
                      </div>
          <h1 className={styles.heroTitle}>Caring for <span className={styles.underline}> Health </span>
          <br />Caring for You</h1>
          <p className={styles.description}>
A brief statement outlining the purpose and mission of the clinic. This can include
the commitment to patient care, community health.          </p>
          <div className={styles.btnContainer}>
            <button className={styles.heroBtn}>Discover More</button>
            <button className={styles.heroBtn}>See All Services</button>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightCol}>
          <Image
            src="/hero_image.png" // Replace with your image path
            alt="Right Image"
            width={600} // Set the width of the image
            height={400} // Set the height of the image
            className={styles.heroRightImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
