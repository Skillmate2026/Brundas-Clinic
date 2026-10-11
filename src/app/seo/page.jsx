import { Suspense } from "react";
import { SEOSection } from "../../component/SEOSection";

const SEOPage = () => {
  return (
    <Suspense fallback={null}>
      <SEOSection />
    </Suspense>
  );
};

export default SEOPage;
