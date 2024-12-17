// components/Hero.js
import React from 'react';
import Image from 'next/image'; // Importing the Next.js Image component
import styles from '@/app/page.module.css'; // Import styles from page.module.css

const Hero = () => {
  return (
    <div>
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
            <button className={styles.heroBtn1}>Discover More</button>
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
    </section >
      



{/* <!-- Search Section --> */}
<section className={styles.searchSection}>
  <div className={styles.searchContainer}>
    {/* <!-- Search Input 1 --> */}
    <div className={styles.searchCol}>
      <Image src="/icon.png" alt="Search Icon" width={100} height={100} className={styles.searchIcon} />
      <input type="text" placeholder="Ex. Doctor, Hospital" className={styles.searchInput} />
    </div>

    {/* <!-- Search Input 2 --> */}
    <div className={styles.searchCol}>
      <Image src="/icon.png" alt="Search Icon" width={100} height={100} className={styles.searchIcon} />
      <input type="text" placeholder="Ex. Surgeon, Cardiologist" className={styles.searchInput} />
    </div>

    {/* <!-- Search Input 3 --> */}
    <div className={styles.searchCol}>
      <Image src="/Location marker.png" alt="Location Icon" width={100} height={100} className={styles.searchIcon} />
      <input type="text" placeholder="Set your location" className={styles.searchInput} />
    </div>

    {/* <!-- Search Button --> */}
    <button className={styles.searchIconBtn}>Search</button>
  </div>
</section>
</div>

  );
};

export default Hero;
