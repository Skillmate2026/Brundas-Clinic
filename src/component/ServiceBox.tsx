"use client";
import { useState } from "react";
import Link from "next/link";
import { serviceboxAll } from "../constant/alldata";

function ServiceBox({
  count,
  number,
  department,
}: {
  count?: boolean;
  number?: number;
  department?: string;
}) {
  const [active, setActive] = useState(1);
  const filtered = department
    ? serviceboxAll.filter((s) => s.department === department)
    : serviceboxAll;
  return (
    <>
      <div className="row">
        {(count && number ? filtered.slice(0, number) : filtered).map(
          (data, i) => (
            <Link
              href={`${data.to}`}
              className="col-xl-3 col-md-6 m-b30 wow fadeInUp"
              data-wow-delay={data.delay}
              data-wow-duration="0.8s"
              key={i}
            >
              <div
                className={`icon-bx-wraper style-3 `}
                onMouseEnter={() => setActive(data.id)}
              >
                <div className="icon-bx-head">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <img src={data.svg1} alt={data.title} />
                    </span>
                  </div>
                  {/* <span
                    className="icon-bg"
                    dangerouslySetInnerHTML={{ __html: data.svg2 }}
                  ></span> */}
                  <div className="icon-content">
                    <h3 className="dz-title" style={{ fontSize: "18px" }}>
                      {data.title}
                    </h3>
                    <p>{data.desc}</p>
                  </div>
                </div>
                <div className="icon-bx-footer">
                  {/* <span className="text-badge" style={{ fontSize: "15px" }}>
                    <img
                      src={data.image}
                      alt={data.title}
                      style={{ height: "40px", width: "40px" }}
                    />
                    {data.docname}
                  </span> */}
                  <Link
                    href={`${data.to}`}
                    className="btn btn-square btn-primary rounded-circle"
                  >
                    <i className="feather icon-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </>
  );
}
export default ServiceBox;
