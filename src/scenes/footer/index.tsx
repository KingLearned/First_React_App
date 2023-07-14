import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 pt-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            At EvoGym, we believe that fitness should be accessible to everyone, no matter their level of experience or ability. we're here to help you reach your fitness goals,
            whether you're just starting out or are a seasoned pro.
          </p>
            <p>we offer a wide range of classes , from yoja to HIIT, that are designed to suit every fitness level.
            Our instructors are passionate about helping you reach your full potential, and will support you every step of the way. 
            </p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Head Office</h4>
          <p className="my-5">Phase 5 Block D-43</p>
          <p className="my-5">Off Raffi Avenue Layout</p>
          <p>PortHarcourt, Rivers State. Nigeria</p>
        </div>
        
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">React out to us through our customer care line with the provided mobile number</p>
          <p>(333)425-6825</p>
        </div>
      </div>
      <p className="text-center bg-gray-500 text-white py-5 mt-10">© Evogym All Rights Reserved. developed by <span className="font-bold text-primary-500"><a href="https://learnedsconcept.onrender.com" target="_blanc">LDC Concept</a></span></p>
    </footer>
  );
};

export default Footer;
