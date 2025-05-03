import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`$[
        selectedPage === lowerCasePage
          ? "text-primary-500"
          : "text-white"
      ] hover:text-primary-300 transition-colors duration-300 font-medium`}
    >
      {page}
    </AnchorLink>
  );
};


export default Link;
