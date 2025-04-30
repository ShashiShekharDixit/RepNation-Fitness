import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";
type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            veritatis quo vero error nobis quos. Voluptates, voluptas autem,
            praesentium velit distinctio repellat atque consequatur alias animi
            assumenda tempore deserunt delectus.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mt-5">Lorem ipsum dolor sit amet.</p>
          <p className="mt-5">fuga porro id mollitia reprehenderit</p>
          <p className="mt-5">, voluptas voluptatem veniam ad cupiditate.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
