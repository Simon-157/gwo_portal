//libraries
// import { useLocation } from "react-router-dom";

//Styles
import errorStyles from "@/styles/errors.module.css";

//components
import { PageNotFoundSvg } from "@/assets/icons/Icons";

const PageNotFound = () => {
//   const location = useLocation();
  return (
    <div className={errorStyles.error__wrapper}>
      <div>
        <PageNotFoundSvg />
        <br />
        <strong>
          sorry, looks like we don't have this <span> page </span>
        </strong>
      </div>
    </div>
  );
};

export default PageNotFound;