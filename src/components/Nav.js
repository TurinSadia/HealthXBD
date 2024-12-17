"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import styles from "@/app/page.module.css";
import Image from "next/image";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image width={150} height={50} src="/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.activeMenu : ""}`}>
          <li>
            <Link href="/find-doctors" onClick={() => setMenuOpen(false)}>
              Find Doctors
            </Link>
          </li>
          <li>
            <Link href="/hospitals" onClick={() => setMenuOpen(false)}>
              Hospitals
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <Button
            text=""
            className={styles.searchBtn}
            icon="/search.png"
            onClick={() => alert("Search clicked")}
          />
          <Button
            text=""
            className={styles.cartBtn}
            icon="/cart.png"
            onClick={() => alert("Cart clicked")}
          />
          <Button
            text="Appointment Now"
            className={styles.appointmentBtn}
            onClick={() => alert("Appointment clicked")}
          />
        </div>
      </nav>
    
  );
};

export default NavBar;
