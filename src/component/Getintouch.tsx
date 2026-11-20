"use client"
import { useRef } from "react";
import { IMAGES } from "../constant/theme";
import { useEmailService } from "@/constant/useEmailService";

function Getintouch() {
    const form = useRef<HTMLFormElement | null>(null);
    const { sendEmail } = useEmailService();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        const result = await sendEmail(form.current);
        if (result.success) {
            console.log('SUCCESS!', result.message);
            form.current.reset(); // Added to clear the form after success
        } else {
            console.error('FAILED...', result.message);
        }
    };
    
    return (
        <>
            <div className="col-xl-5 m-b30" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                {/* Added smooth rounded corners to match the other forms! */}
                <div className="form-wrapper style-1" style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}>
                    <div className="form-body background-blend-burn" 
                        style={{ backgroundColor: "#3365a7", padding: "40px" }} 
                    >
                        <div className="section-head style-1 m-b30">
                            <h2 className="title text-white m-b0">Get in Touch</h2>
                            <p className="text-white m-b0 fw-medium">You can reach us anytime</p>
                            
                            {/* SOCIAL MEDIA LINKS */}
                            <div className="dz-social-icon style-1 m-t20">
                                <ul>
                                    <li>
                                        <a href="https://wa.me/919632371211" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-whatsapp" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/brunda-advanced-orthopaedics-ent-centre/home/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/brundas_clinic/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/people/Brundas-Clinic/61593364482305/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/channel/UCDq6PD0fRUgP1s-YyEVwqPw" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <form ref={form} onSubmit={handleSubmit} className="dzForm">
                            <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                            <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                            <div className="dzFormMsg"></div>
                            <div className="row">
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzFirstName" type="text" className="form-control" id="inputFirstName" placeholder="First Name" required />
                                        <label htmlFor="inputFirstName">First Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzLastName" type="text" className="form-control" id="inputLastName" placeholder="Last Name" required />
                                        <label htmlFor="inputLastName">Last Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzEmail" type="email" className="form-control" id="inputYourEmail" placeholder="Your Email" required />
                                        <label htmlFor="inputYourEmail">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzPhoneNumber" type="number" className="form-control dz-number" id="inputPhoneNumber" placeholder="Phone Number" required />
                                        <label htmlFor="inputPhoneNumber">Phone Number</label>
                                    </div>
                                </div>
                                <div className="col-sm-12 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <textarea name="dzMessage" className="form-control" id="inputMessage" rows={4} placeholder="Message" required></textarea>
                                        <label htmlFor="inputMessage">Message</label>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <button type="submit" name="submit" className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow">
                                        Submit <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Getintouch;