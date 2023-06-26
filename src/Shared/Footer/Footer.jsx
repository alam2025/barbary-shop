import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaPaypal } from 'react-icons/fa'
import { BiLogoVisa } from "react-icons/bi";

const Footer = () => {
      return (
            <>
                  <div className=' mt-auto'>
                        <div className="footer  p-10 bg-base-200 text-base-content">
                              <div>
                                    <span className="footer-title">About Us</span>
                                    <a className="link link-hover">Read Our Blogs</a>
                                    <a className="link link-hover">Contact</a>
                                    <a className="link link-hover">Store Locations</a>

                              </div>
                              <div>
                                    <span className="footer-title">FAQS</span>
                                    <a className="link link-hover">Order Trackings</a>
                                    <a className="link link-hover">Privacy Policy</a>
                                    <a className="link link-hover">Shipping and </a>
                                    <a className="link link-hover">Returns</a>
                              </div>
                              <div>
                                    <span className="footer-title">Services</span>
                                    <a className="link link-hover">Living Room</a>
                                    <a className="link link-hover">Bathroom</a>
                                    <a className="link link-hover">Kitchen</a>
                                    <a className="link link-hover">Lighting</a>
                              </div>
                              <div className=' flex flex-col justify-end items-end'>
                                    <span className="footer-title">Newsletter Subscribe</span>
                                    <p>Get instant updates about our new products and special promos!</p>
                                    <div className="form-control w-80">

                                          <div className="relative">
                                                <input type="text" placeholder="Your Email address" className="input input-bordered w-full pr-16" />
                                                <button className="btn bg-black text-white absolute top-0 right-0 rounded-l-none btn-outline ">Subscribe</button>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className='flex border-t-2 py-6 flex-col md:flex-row gap-6 justify-around items-center'>
                              <div className='flex gap-10'>
                                    <FaFacebook size={30}></FaFacebook>
                                    <FaLinkedin size={30}></FaLinkedin>
                                    <FaGithub size={30}></FaGithub>
                              </div>
                              <div>
                                    <p>&copy; {new Date().getFullYear()} <span className=' text-xl font-semibold'>Barberry</span>. All rights reserved</p>
                              </div>
                              <div className='flex gap-8'>
                                    <BiLogoVisa size={40} className=' text-blue-800'></BiLogoVisa>
                                    <FaPaypal size={40} className=' text-blue-800'></FaPaypal>
                              </div>
                        </div>
                  </div>



            </>
      );
};

export default Footer;