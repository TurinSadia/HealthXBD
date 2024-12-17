// components/OurServices.js

"use client";

import React from 'react';
import Image from 'next/image'; // Importing the Next.js Image component
import Button from './Button'; // Assuming Button is a custom component
import styles from '@/app/page.module.css'; // Import styles from page.module.css

const OurServices = () => {
  // Sample data for cards (dynamic content)
  const servicesData = [
    {
      id: 1,
      imgSrc: "/Background.png",
      alt: "Internal Medicine",
      title: "Internal Medicine",
      description: "30+ Doctors",
    },
    {
      id: 2,
      imgSrc: "/Background (1).png",
      alt: "Dental Care",
      title: "Dental Care",
      description: "30+ Doctors",
    },
    {
      id: 3,
      imgSrc: "/Background (2).png",
      alt: "Urology Care",
      title: "Urology Care",
      description: "30+ Doctors",
    },
    {
      id: 4,
      imgSrc: "/Background (3).png",
      alt: "Neurology Care",
      title: "Neurology Care",
      description: "30+ Doctors",
    },
    {
      id: 5,
      imgSrc: "/Background (4).png",
      alt: "Gynecologists",
      title: "Gynecologists",
      description: "30+ Doctors",
    },
    {
      id: 6,
      imgSrc: "/Background (5).png",
      alt: "Ophthalmology ",
      title: "Ophthalmology ",
      description: "30+ Doctors",
    },
    {
      id: 7,
      imgSrc: "/Background (6).png",
      alt: "Orthopedics",
      title: "Orthopedics",
      description: "30+ Doctors",
    },
    {
      id: 8,
      imgSrc: "/Background (7).png",
      alt: "Cardiology",
      title: "Cardiology",
      description: "30+ Doctors",
    },
  ];

    return (
      <div>
        <div className={styles.container}>
    <section className={styles.ourServices}>
          {/* Title Section */}
          <div className={styles.alignCenter} >
       <div className={styles.OScontents}>
          <div className={styles.imageContainer}>
            <Image
              src="/Group 10.png" // Replace with your image path
              alt="Emergency Service"
              width={30} // Set the width of the image
              height={30} // Set the height of the image
              className={styles.heroImage}
            />
          </div>
          <p className={styles.title}> Our Services</p>
          </div>
          <h2 className={styles.paddingBottom}>Our Mediax Specialties Service</h2>

    </div>

      {/* Service Rows Section */}
      <div className={styles.serviceRows}>
        {/* Row 1 */}
        <div className={styles.row}>
          {servicesData.slice(0, 4).map((service) => (
            <div key={service.id} className={styles.card}>
              <Image
                src={service.imgSrc}
                alt={service.alt}
                width={80} // Adjust the size based on your design
                height={80}
                className={styles.cardImage}
              />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Button text="Read More" className={styles.readMoreBtn} onClick={() => alert(`${service.title} clicked`)} />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className={styles.row}>
          {servicesData.slice(4, 8).map((service) => (
            <div key={service.id} className={styles.card}>
              <Image
                src={service.imgSrc}
                alt={service.alt}
                width={80} // Adjust the size based on your design
                height={80}
                className={styles.cardImage}
              />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Button text="Read More" className={styles.readMoreBtn} onClick={() => alert(`${service.title} clicked`)} />
            </div>
          ))}
            </div>
            
          </div>
          
        </section>
        
        </div>
        
        <div>
              <div className={styles.line}/>
            <div className={styles.exploreServices}>
                <p>You Get Our 20+ More services... <a href="">Explore All Services</a></p>
              </div>
              
            </div>
        </div>  

      
  );
};

export default OurServices;
