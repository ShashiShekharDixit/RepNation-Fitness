import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Logo from "@/assets/Logo.png";
import Link from "./navlink";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/use-media-query";
import { ActionButton } from "@/shared/action-button.component";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const Navbar = (props: Props) => {
  const { selectedPage, setSelectedPage } = props;
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const flexBetween = "flex items-center justify-between";
  const isAboveMDScreens = useMediaQuery("(min-width: 1060px)");

  const navBarBackground = props.isTopOfPage
    ? ""
    : "bg-gradient-to-b from-gray-900 to-gray-800 shadow-md backdrop-blur-sm";

  return (
    <nav>
      <div className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 transition-all duration-300`}>        
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Logo */}
            <img alt="RepNation Logo" src={Logo} className="h-10" />

            {/* Desktop Nav */}
            {isAboveMDScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* Navigation Links */}
                <div className={`${flexBetween} gap-8 text-sm text-white font-semibold`}>
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>

                {/* Sign In and CTA */}
                <div className={`${flexBetween} gap-8`}>
                  <p className="text-white hover:text-primary-300 cursor-pointer transition duration-300">Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-primary-500 p-2 hover:bg-primary-300 transition duration-300"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAboveMDScreens && isOpenMenu && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl p-6">
          <div className="flex justify-end">
            <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
              <XMarkIcon className="h-6 w-6 text-gray-400 hover:text-white transition duration-300" />
            </button>
          </div>

          <div className="mt-10 flex flex-col items-start gap-8 text-white text-lg font-medium">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
