import MapWraper from "@/component/MapWraper";
import PageBanner from "@/component/PageBanner";
import ServiceBox from "@/component/ServiceBox";
import Specialties from "@/component/Specialties";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import React from "react";

const ENTServices = () => {
  return (
    <div>
      <Header />
      <PageBanner
        title="Service Detail"
        bnrimage={IMAGES.bnr2.src}
        filteredData={{ title: "ENT Services" }}
      />
      <Specialties
        defaultTab="ent"
        title={{ title: "Advanced ENT Solutions" }}
        lockTab
      />
      <MapWraper />
      <Footer />
    </div>
  );
};

export default ENTServices;
