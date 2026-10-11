"use client";

type SitemapEntry = {
  id: number;
  title: string;
  description4: string;
  link: string;
  img?: string;
};

type SitemapContentProps = {
  data: SitemapEntry;
};

const SitemapContent = ({ data }: SitemapContentProps) => {
  return (
    <>
      <div className="container">
        <div className="row gx-40">
          <h2 className="vs-details-title text-center text-white">
            {data.title}
          </h2>

          <div
            className="col-lg-12 row member-header overflow-hidden rounded-3 position-relative flex items-center justify-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="vs-details-item mt-4">
              <div
                style={{ color: "white" }}
                dangerouslySetInnerHTML={{ __html: data.description4 }}
              ></div>
            </div>
            {/* <Faq data={data} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapContent;
