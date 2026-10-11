import React from "react";
import Link from "next/link";
import Image from "next/image";

const MobileSticky = () => {
  return (
    <section
      style={{ position: "fixed", bottom: 0, zIndex: 999 }}
      className="mobile-view container-full"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "60px",
        }}
      >
        <div style={{ width: "25%" }}>
          <a
            href="https://maps.app.goo.gl/MFjAErUPbs9YsLY96"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingTop: "10px",
              gap: "10px",
              textDecoration: "none",
              backgroundColor: "#d968b2",
              height: "100%",
            }}
          >
            <Image
              src="/assets/flat-icons/google-maps.svg"
              alt="Location"
              height={25}
              width={25}
            />
            <p
              style={{
                fontSize: "12px",
                color: "#1B2251",
                fontWeight: 600,
                margin: 0,
              }}
            >
              LOCATE US
            </p>
          </a>
        </div>

        <div style={{ width: "25%" }}>
          <a
            href="https://wa.link/nkwqkg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textDecoration: "none",
              paddingTop: "10px",
              gap: "10px",
              backgroundColor: "#f5d986",
              height: "100%",
            }}
          >
            <Image
              src="/assets/flat-icons/whatsapp.svg"
              alt="WhatsApp"
              height={25}
              width={25}
            />
            <p
              style={{
                fontSize: "12px",
                color: "#1B2251",
                fontWeight: 600,
                margin: 0,
              }}
            >
              WHATSAPP
            </p>
          </a>
        </div>

        <div style={{ width: "25%" }}>
          <a
            href="tel:+919632371211"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingTop: "10px",
              gap: "10px",
              textDecoration: "none",
              backgroundColor: "#d968b2",
              height: "100%",
            }}
          >
            <Image
              src="/assets/flat-icons/phone-call (1).svg"
              alt="Call"
              height={25}
              width={25}
            />
            <p
              style={{
                fontSize: "12px",
                color: "#1B2251",
                fontWeight: 600,
                margin: 0,
              }}
            >
              CALL
            </p>
          </a>
        </div>

        <div style={{ width: "25%" }}>
          <Link
            href="https://wa.link/sxr517"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingTop: "10px",
              gap: "10px",
              textDecoration: "none",
              backgroundColor: "#f5d986",
              height: "100%",
            }}
          >
            <Image
              src="/assets/flat-icons/medical-appointment.svg"
              alt="Appointment"
              height={25}
              width={25}
            />
            <p
              style={{
                overflowWrap: "break-word",
                fontSize: "12px",
                color: "#1B2251",
                fontWeight: 600,
                margin: 0,
              }}
            >
              APPOINTMENT
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileSticky;
