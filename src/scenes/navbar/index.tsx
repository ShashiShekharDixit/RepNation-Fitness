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

  // * tailwind style
  const flexBetween = "flex items-center justify-between";
  // * useMediaQuery to check the screen size by boolean
  const isAboveMDScreens = useMediaQuery("(min-width: 1060px)");
  console.log("props.isTopOfPage", props.isTopOfPage);

  const navBarBackground = props.isTopOfPage
    ? ""
    : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${navBarBackground} ${flexBetween}  fixed top-0 z-30 w-full py-6`}
      >
        {/* inner width that cover nested divs, mx-auto = center position*/}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* logo */}
            {/* leftside */}
            <img alt="image" src={Logo} />
            {/* right that contain the whole children */}
            {isAboveMDScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* inner left */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page=" Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page=" Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* inner right */}
                <div className={`${flexBetween} gap-8 `}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2 "
                onClick={() => {
                  setIsOpenMenu(!isOpenMenu);
                }}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {!isAboveMDScreens && isOpenMenu && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* Close Icon */}

          <div className="flex justify-end p-12">
            <button
              onClick={() => {
                setIsOpenMenu(!isOpenMenu);
              }}
            >
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
