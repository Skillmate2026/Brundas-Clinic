"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DesktopFloatingActions = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`desktop-float ${visible ? "show" : ""}`}
      style={{
        position: "fixed",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        zIndex: 999,
        display: "none",
      }}
    >
      <div className="float-wrapper">
        {/* Locate */}
        <a
          href="https://maps.app.goo.gl/MFjAErUPbs9YsLY96"
          target="_blank"
          rel="noopener noreferrer"
          className="float-item bg-pink"
        >
          <Image
            src="/assets/flat-icons/location.png"
            alt="Location"
            height={25}
            width={25}
          />
          {/* <span>Locate</span> */}
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.link/sxr517"
          target="_blank"
          rel="noopener noreferrer"
          className="float-item bg-yellow"
        >
          <Image
            src="/assets/flat-icons/whatsapp (1).png"
            alt="WhatsApp"
            height={25}
            width={25}
          />
          {/* <span>WhatsApp</span> */}
        </a>

        {/* Call */}
        <a href="tel:+919632371211" className="float-item bg-pink">
          <Image
            src="/assets/flat-icons/telephone-call.png"
            alt="Call"
            height={25}
            width={25}
          />
          {/* <span>Call</span> */}
        </a>

        {/* Appointment */}
        <Link href="https://wa.link/sxr517" className="float-item bg-yellow">
          <Image
            src="/assets/flat-icons/appointment.png"
            alt="Appointment"
            height={25}
            width={25}
          />
          {/* <span>App.</span> */}
        </Link>
      </div>
    </div>
  );
};

export default DesktopFloatingActions;
