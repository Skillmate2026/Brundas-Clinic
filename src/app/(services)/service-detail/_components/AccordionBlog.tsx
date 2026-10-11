"use client";
import { Accordion } from "react-bootstrap";
import { usePathname } from "next/navigation";
import { accordiondata } from "@/constant/alldata";

const AccordionBlog = () => {
  const path = usePathname();
  const faqData = accordiondata.filter((data) => data.link === path);

  return (
    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
      <h3>Frequently Asked Questions</h3>
      {faqData.map((data, i) => (
        <Accordion.Item
          eventKey={data.key}
          key={i}
          className="wow fadeInUp"
          data-wow-delay={data.delay}
          data-wow-duration="0.7s"
        >
          <Accordion.Header>{data.title}</Accordion.Header>
          <Accordion.Body>{data.content}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
export default AccordionBlog;
