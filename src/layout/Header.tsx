"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { IMAGES } from "../constant/theme";
import { headerdata, headerinfo, HeaderItem } from "../constant/alldata";
import { useEmailService } from "@/constant/useEmailService";

function Header() {
  const [show, setShow] = useState<number | null>(null);
  const [isActive, setIsActive] = useState<number | null>(null);
  const [openNestedSubMenus, setOpenNestedSubMenus] = useState<
    Record<string, boolean>
  >({});
  const [isMobile, setIsMobile] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleclick = (index: number) => setShow(index);

  const menuHandler = (index: number) => {
    setIsActive((prev) => (prev === index ? null : index));
    setOpenNestedSubMenus({});
  };

  useEffect(() => {
    const scrollHandler = () => setScroll(window.scrollY >= 90);
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
    const resizeHandler = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const toggleNestedMenuKey = (key: string) => {
    setOpenNestedSubMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const closeAllMenus = () => {
    setShow(null);
    setIsActive(null);
    setOpenNestedSubMenus({});
  };

  // email
  const form = useRef<HTMLFormElement | null>(null);
  const { sendEmail } = useEmailService();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const result = await sendEmail(form.current);
    if (result.success) {
      console.log("SUCCESS!", result.message);
      form.current.reset();
    } else {
      console.error("FAILED...", result.message);
    }
  };

  return (
    <header
      className="site-header header style-1"
      style={{ backgroundColor: "#235ba5" }}
    >
      {/* Top info bar */}
      <div className="header-info-bar d-none d-xxl-block">
        <div className="container-fluid">
          <div className="row">
            {headerinfo.map((data, i) => (
              <div className="col" key={i}>
                <div className="icon-bx-wraper style-5">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <Image
                        src={data.image}
                        width={30}
                        height={30}
                        alt={data.title || "Info"}
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h2 className="dz-title text-white">{data.title}</h2>
                    <p className="text-white">{data.paragraph}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div
        className={`sticky-header main-bar-wraper ${scroll ? "is-fixed" : ""}`}
      >
        <div className="main-bar clearfix  text-white">
          <div className="container-fluid clearfix inner-bar">
            <div className="logo-header logo-dark">
              <Link href="/">
                <Image
                  src="/assets/banners/Brunda Logo.png"
                  height={400}
                  width={400}
                  alt="Brunda Advanced Orthopaedics & ENT Centre"
                />
              </Link>
            </div>

            {/* Mobile toggler */}
            <button
              onClick={() => handleclick(2)}
              className={`w3menu-toggler navicon ${show === 2 ? "open" : ""}`}
              type="button"
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* overlay */}
            <div
              onClick={closeAllMenus}
              className="menu-close fade-overlay"
            ></div>

            {/* Menu */}
            <div
              className={`header-nav w3menu w3menu-end mo-left ${
                show === 2 ? "show" : ""
              }`}
              id="W3Menu"
            >
              <div className="logo-header logo-dark">
                <Link href="/">
                  <Image
                    src="/assets/banners/Brunda Logo.png"
                    height={400}
                    width={400}
                    alt="Brunda Advanced Orthopaedics & ENT Centre"
                  />
                </Link>
              </div>

              <ul className="nav navbar-nav">
                {headerdata.map((data: HeaderItem, i: number) => {
                  const menuClassName = data.classChange;

                  // ✅ Helper: Recursive submenu renderer (supports unlimited nested levels)
                  const renderSubMenu = (
                    items: any[] = [],
                    parentKey: string
                  ) => {
                    return (
                      <ul className="sub-menu">
                        {items.map((item: any, idx: number) => {
                          const key = `${parentKey}-${idx}`;
                          const hasChildren =
                            Array.isArray(item.submenu) &&
                            item.submenu.length > 0;
                          const isOpen = !!openNestedSubMenus[key];

                          // ✅ Nested submenu item
                          if (hasChildren) {
                            return (
                              <li
                                key={key}
                                className={`sub-menu-down ${
                                  isOpen ? "open" : ""
                                }`}
                              >
                                <Link
                                  href={item.to || "#"}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    toggleNestedMenuKey(key);
                                  }}
                                  className="menu-group-title"
                                >
                                  <span>{item.title}</span>
                                  {/* <i className="fas fa-chevron-down" /> */}
                                </Link>

                                {/* Render deeper levels */}
                                {renderSubMenu(item.submenu, key)}
                              </li>
                            );
                          }

                          // ✅ Normal submenu item
                          return (
                            <li key={key}>
                              {item.to ? (
                                <Link href={item.to}>{item.title}</Link>
                              ) : (
                                <span>{item.title}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    );
                  };

                  // ✅ Mega menu
                  if (menuClassName === "has-mega-menu") {
                    const hasColumnLayout =
                      data.content?.some(
                        (item) =>
                          Array.isArray((item as any).submenu) &&
                          (item as any).submenu.length > 0
                      ) ?? false;

                    return (
                      <li
                        key={i}
                        className={`has-mega-menu sub-menu-down auto-width menu-left ${
                          i === isActive ? "open" : ""
                        }`}
                      >
                        <Link
                          href={`${data.to}`}
                          onClick={(e) => {
                            // e.preventDefault();
                            menuHandler(i);
                          }}
                        >
                          <span>{data.title}</span>
                          <i className="fas fa-chevron-down" />
                        </Link>

                        <div
                          className={`mega-menu ${
                            hasColumnLayout ? "services-mega" : ""
                          }`}
                        >
                          {hasColumnLayout && isMobile ? (
                            <div className="services-mega__accordion">
                              {(data.content || []).map(
                                (item: any, index: number) => {
                                  const nestedLinks = item.submenu || [];
                                  if (!nestedLinks.length) return null;

                                  const topKey = `${i}-col-${index}`;
                                  const isSectionOpen =
                                    !!openNestedSubMenus[topKey];
                                  const hasGroupedChildren = nestedLinks.some(
                                    (child: any) =>
                                      Array.isArray(child.submenu) &&
                                      child.submenu.length > 0
                                  );

                                  return (
                                    <div
                                      key={`${i}-${index}-${item.title}`}
                                      className={`services-mega__accordion-item ${
                                        isSectionOpen ? "open" : ""
                                      }`}
                                    >
                                      <button
                                        type="button"
                                        className="services-mega__accordion-btn"
                                        onClick={() =>
                                          toggleNestedMenuKey(topKey)
                                        }
                                      >
                                        <span>{item.title}</span>
                                        <i
                                          className={`fas fa-chevron-${
                                            isSectionOpen ? "up" : "down"
                                          }`}
                                        />
                                      </button>

                                      <div
                                        className={`services-mega__accordion-panel ${
                                          isSectionOpen ? "show" : ""
                                        }`}
                                      >
                                        {hasGroupedChildren ? (
                                          nestedLinks.map(
                                            (group: any, groupIdx: number) => {
                                              const childLinks =
                                                group.submenu || [];
                                              const groupKey = `${topKey}-group-${groupIdx}`;
                                              const isGroupOpen =
                                                !!openNestedSubMenus[groupKey];

                                              return (
                                                <div
                                                  key={`${groupKey}-${group.title}`}
                                                  className={`services-mega__accordion-sub ${
                                                    isGroupOpen ? "open" : ""
                                                  }`}
                                                >
                                                  <button
                                                    type="button"
                                                    className="services-mega__accordion-subbtn"
                                                    onClick={() =>
                                                      toggleNestedMenuKey(
                                                        groupKey
                                                      )
                                                    }
                                                  >
                                                    <span>{group.title}</span>
                                                    <i
                                                      className={`fas fa-chevron-${
                                                        isGroupOpen
                                                          ? "up"
                                                          : "down"
                                                      }`}
                                                    />
                                                  </button>
                                                  <div
                                                    className={`services-mega__accordion-panel ${
                                                      isGroupOpen ? "show" : ""
                                                    }`}
                                                  >
                                                    <ul className="services-mega__list">
                                                      {childLinks.map(
                                                        (
                                                          link: any,
                                                          linkIdx: number
                                                        ) => (
                                                          <li
                                                            key={`${groupKey}-${linkIdx}-${link.title}`}
                                                          >
                                                            {link.to ? (
                                                              <Link
                                                                href={link.to}
                                                                onClick={
                                                                  closeAllMenus
                                                                }
                                                              >
                                                                {link.title}
                                                              </Link>
                                                            ) : (
                                                              <span>
                                                                {link.title}
                                                              </span>
                                                            )}
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  </div>
                                                </div>
                                              );
                                            }
                                          )
                                        ) : (
                                          <ul className="services-mega__list">
                                            {nestedLinks.map(
                                              (link: any, linkIdx: number) => (
                                                <li
                                                  key={`${topKey}-${linkIdx}-${link.title}`}
                                                >
                                                  {link.to ? (
                                                    <Link
                                                      href={link.to}
                                                      onClick={closeAllMenus}
                                                    >
                                                      {link.title}
                                                    </Link>
                                                  ) : (
                                                    <span>{link.title}</span>
                                                  )}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        )}
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          ) : hasColumnLayout ? (
                            <div className="services-mega__grid">
                              {(data.content || []).map(
                                (item: any, index: number) => {
                                  const nestedLinks = item.submenu || [];
                                  if (!nestedLinks.length) return null;
                                  const hasGroupedChildren = nestedLinks.some(
                                    (child: any) =>
                                      Array.isArray(child.submenu) &&
                                      child.submenu.length > 0
                                  );
                                  const colClassName = hasGroupedChildren
                                    ? "services-mega__col services-mega__col--full"
                                    : "services-mega__col";

                                  return (
                                    <div
                                      className={colClassName}
                                      key={`${i}-${index}-${item.title}`}
                                    >
                                      <div className="services-mega__heading">
                                        {item.to ? (
                                          <Link
                                            href={item.to}
                                            onClick={closeAllMenus}
                                          >
                                            {item.title}
                                          </Link>
                                        ) : (
                                          <span>{item.title}</span>
                                        )}
                                      </div>
                                      {hasGroupedChildren ? (
                                        <div className="services-mega__group-list">
                                          {nestedLinks.map(
                                            (group: any, groupIdx: number) => {
                                              const childLinks =
                                                group.submenu || [];
                                              return (
                                                <div
                                                  className="services-mega__group"
                                                  key={`${index}-${groupIdx}-${group.title}`}
                                                >
                                                  <div className="services-mega__subheading">
                                                    {group.to ? (
                                                      <Link
                                                        style={{
                                                          color: "#EA8D21",
                                                        }}
                                                        href={group.to}
                                                        onClick={closeAllMenus}
                                                      >
                                                        {group.title}
                                                      </Link>
                                                    ) : (
                                                      <span>{group.title}</span>
                                                    )}
                                                  </div>
                                                  <ul className="services-mega__list">
                                                    {childLinks.map(
                                                      (
                                                        link: any,
                                                        linkIdx: number
                                                      ) => (
                                                        <li
                                                          key={`${index}-${groupIdx}-${linkIdx}-${link.title}`}
                                                        >
                                                          {link.to ? (
                                                            <Link
                                                              href={link.to}
                                                              onClick={
                                                                closeAllMenus
                                                              }
                                                            >
                                                              {link.title}
                                                            </Link>
                                                          ) : (
                                                            <span>
                                                              {link.title}
                                                            </span>
                                                          )}
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </div>
                                              );
                                            }
                                          )}
                                        </div>
                                      ) : (
                                        <ul className="services-mega__list">
                                          {nestedLinks.map(
                                            (link: any, linkIdx: number) => (
                                              <li
                                                key={`${index}-${linkIdx}-${link.title}`}
                                              >
                                                {link.to ? (
                                                  <Link
                                                    href={link.to}
                                                    onClick={closeAllMenus}
                                                  >
                                                    {link.title}
                                                  </Link>
                                                ) : (
                                                  <span>{link.title}</span>
                                                )}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          ) : (
                            <ul className="demo-menu">
                              {data.content?.map((item: any, index: number) => (
                                <li key={index}>
                                  {item.to ? (
                                    <Link
                                      href={item.to}
                                      onClick={closeAllMenus}
                                    >
                                      <Image
                                        src={item.image as string}
                                        alt={item.title}
                                      />
                                      <span className="menu-title">
                                        {item.title}
                                      </span>
                                    </Link>
                                  ) : (
                                    <span>
                                      <Image
                                        src={item.image as string}
                                        alt={item.title}
                                      />
                                      <span className="menu-title">
                                        {item.title}
                                      </span>
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    );
                  }

                  // ✅ Dropdown menu (with recursive nested submenus)
                  if (menuClassName === "sub-menu-down") {
                    return (
                      <li
                        key={i}
                        className={`sub-menu-down ${
                          i === isActive ? "open" : ""
                        }`}
                      >
                        <Link
                          href={`${data.to || "#"}`}
                          onClick={(e) => {
                            // Only prevent default if no valid URL or clicked the chevron
                            if (
                              !data.to ||
                              (e.target instanceof HTMLElement &&
                                e.target.tagName === "I")
                            ) {
                              e.preventDefault();
                            }
                            menuHandler(i);
                          }}
                        >
                          <span>{data.title}</span>
                          <i
                            className="fas fa-chevron-down"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              menuHandler(i);
                            }}
                          />
                        </Link>

                        {/* ✅ SUB MENU (Recursive rendering here) */}
                        {data.content
                          ? renderSubMenu(data.content as any[], `${i}`)
                          : null}
                      </li>
                    );
                  }

                  // ✅ Normal link
                  return (
                    <li key={i}>
                      <Link href={data.to as string}>
                        <span>{data.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Social (replace links later if needed) */}
              <div className="dz-social-icon">
                <ul>
                  <li>
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <i className="fa-brands fa-x-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <i className="fa-brands fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right CTA */}
            <div className="desk-view">
              <div className={`extra-nav  ${scroll ? "active" : ""}`}>
                <div className="extra-cell ">
                  <ul className="header-right">
                    <li className="nav-item">
                      <Link
                        href="https://wa.link/sxr517"
                        className="btn btn-primary btn-hover1"
                      >
                        Appointment
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => handleclick(1)}
                        type="button"
                        className="toggle-nav-btn"
                        aria-label="Open Sidebar"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`offcanvas dz-offcanvas offcanvas offcanvas-end ${
          show === 1 ? "show" : ""
        } mobile-view`}
        tabIndex={-1}
        id="headerSidebar"
        aria-hidden={show === 1 ? "false" : "true"}
      >
        <button
          onClick={() => setShow(null)}
          type="button"
          className="btn-close m-t10 m-l10"
          aria-label="Close"
        ></button>

        <div className="offcanvas-body">
          <div className="widget">
            <div className="sidebar-header m-b20">
              <Link href="/">
                <Image src={IMAGES.logo} alt="Brunda Advanced Orthopaedics & ENT Centre" />
              </Link>
            </div>
            <p>
              Brunda Advanced Orthopaedics & ENT Centre provides expert ENT and Orthopaedic care
              with advanced diagnostics, modern facilities, and patient-first
              treatment.
            </p>
          </div>

          <div className="widget">
            <div className="widget-title">
              <h4 className="title">Contact Us</h4>
            </div>
            <ul className="list-check">
              <li>Shivananda Nagar Main Road, Bangalore</li>
              <li>
                <Link
                  href="mailto:info@brundaspecialistclinic.com"
                  className="text-body"
                >
                  info@brundaspecialistclinic.com
                </Link>
              </li>
              <li>
                <Link href="tel:+919632371211" className="text-body">
                  +91 96323 71211
                </Link>
              </li>
            </ul>
          </div>

          <div className="widget">
            <div className="widget-title">
              <h4 className="title">Newsletter</h4>
            </div>

            <form
              className="dzSubscribe style-2"
              ref={form}
              onSubmit={handleSubmit}
            >
              <div className="dzSubscribeMsg"></div>
              <div className="form-group">
                <div className="input-group mb-0">
                  <input
                    name="dzEmail"
                    required
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                  <div className="input-group-addon">
                    <button
                      name="submit"
                      value="Submit"
                      type="submit"
                      className="btn text-primary btn-transparent p-2"
                      aria-label="Submit"
                    >
                      <i className="fa-solid fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="widget">
            <div className="widget-title">
              <h4 className="title">Follow Us</h4>
            </div>
            <div className="dz-social-icon style-1">
              <ul>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    <i className="fa-brands fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    <i className="fa-brands fa-x-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    <i className="fa-brands fa-youtube" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
