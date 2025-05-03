import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";
type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        {/* Logo and About Section */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            RepNation is your ultimate destination for fitness, transformation, and well-being. 
            Join our vibrant community and take the first step toward a stronger, healthier you.
          </p>
          <p>© {new Date().getFullYear()} RepNation. All Rights Reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <p className="mt-5 hover:underline cursor-pointer">Home</p>
          <p className="mt-5 hover:underline cursor-pointer">Our Classes</p>
          <p className="mt-5 hover:underline cursor-pointer">Benefits</p>
          <p className="mt-5 hover:underline cursor-pointer">Contact</p>
        </div>

        {/* Contact Info */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Reach out to us for memberships, inquiries, or collaborations.</p>
          <p className="font-medium">(333) 425-6825</p>
          <p className="mt-2 font-medium">support@RepNation.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
