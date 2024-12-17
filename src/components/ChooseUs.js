import React from 'react';
import Image from 'next/image';
import styles from '@/app/page.module.css';

const ChooseUs = () => {
  return (
    <section className={styles.chooseUs}>
      <div className={styles.chooseUsContent}>
        {/* Left Column */}
              <div className={styles.leftCol}>
                   <div className={styles.contents}>
          <div className={styles.imageContainer}>
            <Image
              src="/Group 10.png" // Replace with your image path
              alt="chooseUs Image"
              width={30} // Set the width of the image
              height={30} // Set the height of the image
              className={styles.chooseUsImage}
            />
          </div>
          
        <p className={styles.subText}>24/7 Emergency Service</p>

          </div>
    <h1 className={styles.chooseUsTitle}>We Remain Continuously Available for Your Health Services</h1>
          
                  <div className={styles.facilities}>
                     <Image
              src="/Background+Border.png" // Replace with your image path
              alt="chooseUs Image"
              width={50} // Set the width of the image
              height={50} // Set the height of the image
              className={styles.countImage}
                      /> 
                      <div className={styles.detailsFacility}>
                          <h3>Compassionate & Expert Care</h3>
                          <p>Our team of dedicated healthcare professionals combines years
                              of experience with a genuine commitment to providing.</p>
                           <hr />
                      </div>

                    
                  </div>
                  <div className={styles.facilities}>
                     <Image
              src="/Background+Border (1).png" // Replace with your image path
              alt="chooseUs Image"
              width={50} // Set the width of the image
              height={50} // Set the height of the image
              className={styles.countImage}
                      /> 
                      <div className={styles.detailsFacility}>
                          <h3>Patient-Centered Approach</h3>
                          <p>Your health and well-being are our top priorities. We take the time
                              to listen to your concerns, answer your questions.</p>
                           <hr />
                      </div>

                      
                  </div>
                  <div className={styles.facilities}>
                     <Image
              src="/Background+Border (2).png" // Replace with your image path
              alt="chooseUs Image"
              width={50} // Set the width of the image
              height={50} // Set the height of the image
              className={styles.countImage}
                      /> 
                      <div className={styles.detailsFacility}>
                          <h3>Personalized Treatment Plans</h3>
                          <p>We understand that every patient is unique, and their healthcare
needs may vary. That&apos;s why we create individualized treatment.</p>
                      </div>

                      
                  </div>

                 
         
        </div>

        {/* Right Column */}
        <div className={styles.rightCol}>
          <Image
            src="/Group 30.png" // Replace with your image path
            alt="Right Image"
            width={600} // Set the width of the image
            height={400} // Set the height of the image
            className={styles.chooseUsRightImage}
          />
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
