import MapWraper from "@/component/MapWraper";
import PageBanner from "@/component/PageBanner";
import ServiceBox from "@/component/ServiceBox";
import Specialties from "@/component/Specialties";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import React from "react";

const OrthopaedicServices = () => {
  return (
    <div>
      <Header />
      <PageBanner
        title="Service Detail"
        bnrimage={IMAGES.bnr2.src}
        filteredData={{ title: "Orthopaedic Services" }}
      />
      <Specialties
        defaultTab="ortho"
        title={{ title: "Advanced Orthopaedic Solutions" }}
        lockTab
      />
      <MapWraper />
      <Footer />
    </div>
  );
};

export default OrthopaedicServices;
