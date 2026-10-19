import { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  bnrimage: string | StaticImageData;
  filteredData: { title: string };
}

function PageBanner({ bnrimage, filteredData }: Props) {
  return (
    <>
      <div
        className="dz-banner-dark overlay-secondary-middle"
        // style={{ backgroundImage: `url(${bnrimage})` }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry d-table-cell">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-row wow fadeInUp"
              data-wow-delay="0.4s"
              data-wow-duration="0.8s"
            >
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  {/* Added className="text-white" here */}
                  <Link href="/" className="text-white">Home</Link>
                </li>
                <li className="breadcrumb-item text-white">
                  {filteredData?.title}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default PageBanner;