//libraries
import { useRouter } from "next/router";

//Styles
import errorStyles from "@/styles/errors.module.css";

//components
import { PageNotFoundSvg } from "@/assets/icons/Icons";

const PageNotFound = () => {
  const router = useRouter();
  return (
    <div className={errorStyles.error__wrapper}>
      <div>
        <span onClick={() => {router.back()}} className="btn h3 text-lg rounded-md px-10 text-transparent text-gradient text-shadow-sm ">Back</span>
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