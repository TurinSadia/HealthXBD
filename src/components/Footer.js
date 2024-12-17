import React from 'react';
import Image from 'next/image';
import Link from 'next/link';  // Import Link component from next/link
import styles from "@/app/page.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
          <div className={styles.container}>
              <div className={styles.footerCols}>
        {/* 1st Column: Logo and Social Links */}
        <div className={styles.column}>
          <div className={styles.logo}>
            <Image src="/Group 3.png" alt="Logo" width={150} height={50} />
          </div>
          <p>Address, City, Country</p>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/a.elementor-icon (3).png" alt="Facebook" width={30} height={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/a.elementor-icon (2).png" alt="Twitter" width={30} height={30} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Image src="/a.elementor-icon (1).png" alt="YouTube" width={30} height={30} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <Image src="/a.elementor-icon.png" alt="Pinterest" width={30} height={30} />
            </a>
          </div>
        </div>

        {/* 2nd Column */}
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">About Us</Link></li> {/* Use Link component */}
            <li><Link href="/">Our Pricing</Link></li>
            <li><Link href="/">Our Gallery</Link></li>
            <li><Link href="/">Appointment</Link></li>
            <li><Link href="/">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* 3rd Column */}
        <div className={styles.column}>
          <h3>Department</h3>
          <ul>
            <li><Link href="/">Orthology</Link></li>
            <li><Link href="/">Neurology</Link></li>
            <li><Link href="/">Dental Care</Link></li>
            <li><Link href="/">Opthalmology</Link></li>
            <li><Link href="/">Cardiology</Link></li>
          </ul>
        </div>

        {/* 4th Column */}
        <div className={styles.column}>
          <h3>Useful Links</h3>
          <ul>
          <li><Link href="/">About Us</Link></li> {/* Use Link component */}
            <li><Link href="/">Our Pricing</Link></li>
            <li><Link href="/">Our Gallery</Link></li>
            <li><Link href="/">Appointment</Link></li>
            <li><Link href="/">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
          

       
<div className={styles.line}>
</div>
      {/* Copyright */}
      <p className={styles.copyRight}>Copyright ©2024 Health.com. All Rights Reserved</p>
   </div>
      </footer>
  );
};

export default Footer;
