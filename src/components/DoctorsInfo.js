"use client";
import Image from 'next/image';
import doctorsData from '@/constants/data.json'; // Adjust path accordingly
import styles from '@/app/page.module.css'; 
import React, { useState, useEffect } from 'react';

const DoctorsInfo = () => {

      const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch('/constants/data.json'); // Adjust the path if needed
      const data = await response.json();
      setDoctors(data);
    };
    fetchDoctors();
  }, []);


  return (
    <div>
       <div className={styles.container}>
    <section className={styles.doctorsInfo}>
          {/* Title Section */}
          <div className={styles.alignCenter} >
       <div className={styles.Dcontents}>
          <div className={styles.imageContainer}>
            <Image
              src="/Group 10.png" // Replace with your image path
              alt="Emergency Service"
              width={30} // Set the width of the image
              height={30} // Set the height of the image
              className={styles.heroImage}
            />
          </div>
          <p className={styles.title}> Our Doctor&apos;s </p>
          </div>
                      <h2 className={styles.paddingBottom}>Our Special Doctors</h2>
                      <p className={styles.paragraph}>Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique blend of expertise, empathy, and experience to ensure that your health is in the best hands</p>
                      

                  </div>
                  


{/* Card */}

<div className={styles.doctorsGrid}>
      {doctorsData.map((doctor) => (
        <div key={doctor.id} className={styles.doctorCard}>
          {/* Image */}
          <Image 
            src={doctor.img} 
            alt={doctor.name} 
            width={400} 
            height={400} 
            className={styles.doctorImage} 
          />
          <div className={styles.doctorsDetails}>
            
          {/* Name */}
          <h3 className={styles.doctorName}>{doctor.name}</h3>

          {/* Designation and Rating */}
          <div className={styles.designationRatings}>
            <p className={styles.designation}>{doctor.designation}</p>
            <p className={styles.rating}> ⭐ {doctor.starRating} </p>
          </div>

          {/* Patients Served */}
          <p className={styles.patientsServed}>
             {doctor.patientsServed} <strong>Patients </strong>
          </p>

          {/* Hospital Name */}
          <p className={styles.hospitalName}>
         {doctor.hospital}
            </p>
            </div>
        </div>
      ))}
          </div>
          

          





 </section>
      </div>
      

      <div>
              <div className={styles.line}/>
            <div className={styles.exploreServices}>
                <p>You Get Our 100+ More Doctors... <a href="">Explore All Doctors</a></p>
              </div>
              
            </div>
    </div>
  )
}

export default DoctorsInfo
