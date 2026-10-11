import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "../constant/theme";
import { worldclasslistdata } from "../constant/alldata";

function WorldClass() {
  return (
    <>
      <div className="row content-wrapper style-1 align-items-center">
        <div className="section-head style-1  ">
          <p className="main-title text-center">
            Welcome to Brunda Specialist Clinic
          </p>
          <h1 className="title m-b0 text-center">
            Where Advanced Bone & Joint Care Meets Expertise at the Best
            Orthopaedic Clinic in Vijayanagar
          </h1>
          <p
            className="wow fadeInUp text-center"
            data-wow-delay="0.4s"
            data-wow-duration="0.8s"
          >
            At <strong>Brunda Specialist Clinic</strong>, known as the{" "}
            <a href="https://www.brundaspecialistclinic.com/our-doctors/dr-nagaraj-m">
              Best Orthopaedic Clinic in Vijayanagar
            </a>
            , we provide advanced ENT and orthopaedic care for patients of all
            ages. With modern facilities, experienced specialists, and a
            patient-first approach, we ensure accurate diagnosis, effective
            treatment, and compassionate care for you and your family.
          </p>
        </div>
        <div className="col-xl-6 m-b30">
          <div className="content-media">
            <div className="dz-media">
              <img
                src="/assets/home-images/ent-and-ortho.jpg"
                style={{ width: "100%" }}
                alt="Best Orthopaedic Clinic in Vijayanagar"
              />
            </div>
            {/* <div
              className="item1"
              data-bottom-top="transform: translateY(-50px)"
              data-top-bottom="transform: translateY(50px)"
            >
              <div className="info-widget style-7">
                <div className="widget-content bg-secondary">Call Support</div>
                <div className="widget-media">
                  <Image
                    src="https://img.freepik.com/premium-photo/group-doctors-reading-document-meeting-room-hospital_265022-50069.jpg?ga=GA1.1.517022815.1751973251&w=740&q=80"
                    height={100}
                    width={100}
                    alt=""
                  />
                  <div className="call-widget">
                    <Link href={"#"} scroll={false}>
                      {" "}
                      <Image src={IMAGES.camerasvg} alt="" />{" "}
                    </Link>
                    <Link href={"#"} scroll={false}>
                      {" "}
                      <Image src={IMAGES.massagesvg} alt="" />{" "}
                    </Link>
                    <Link href={"#"} scroll={false} className="active">
                      {" "}
                      <Image src={IMAGES.callsvg} alt="" />{" "}
                    </Link>
                    <Link href={"#"} scroll={false}>
                      {" "}
                      <Image src={IMAGES.mikesvg} alt="" />{" "}
                    </Link>
                    <Link href={"#"} scroll={false}>
                      {" "}
                      <Image src={IMAGES.videosvg} alt="" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div
              className="item2"
              data-bottom-top="transform: translateY(50px)"
              data-top-bottom="transform: translateY(-50px)"
            >
              <div className="info-widget style-6 bg-primary">
                <div className="info-icon bg-secondary">
                  <Image src={IMAGES.clocksvg} alt="" />
                </div>
                <div className="widget-content">
                  <h4 className="title">Open Hours</h4>
                  <ul>
                    <li>
                      Monday <strong>09:30 - 07:30</strong>
                    </li>
                    <li>
                      Tuesday <strong>09:30 - 07:30</strong>
                    </li>
                    <li>
                      Wednesday <strong>09:30 - 07:30</strong>
                    </li>
                    <li>
                      Thursday <strong>09:30 - 07:30</strong>
                    </li>
                    <li>
                      Friday <strong>09:30 - 07:30</strong>
                    </li>
                    <li>
                      Saturday <strong>09:30 - 07:30</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-xl-6 m-b30">
          <ul
            className="list-check text-secondary grid-2 fw-medium m-b30 wow fadeInUp"
            data-wow-delay="0.6s"
            data-wow-duration="0.8s"
          >
            {worldclasslistdata.map((data, i) => (
              <li key={i}>{data.title}</li>
            ))}
          </ul>

          <div
            className="d-flex flex-wrap align-items-center wow fadeInUp"
            data-wow-delay="0.8s"
            data-wow-duration="0.8s"
          >
            <Link
              href="https://wa.link/sxr517"
              className="btn btn-lg btn-icon btn-secondary btn-shadow m-r30 mb-3 mb-sm-0"
            >
              Appointment
              <span className="right-icon">
                <i className="feather icon-arrow-right" />
              </span>
            </Link>

            <div className="info-widget style-5">
              <div className="widget-media text-primary">
                <i className="feather icon-phone-call dz-ring-effect" />
              </div>
              <div className="widget-content">
                <h6 className="title">Contact us</h6>
                <Link href="tel:+919632371211" className="text-secondary">
                  +91 96323 71211
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WorldClass;
