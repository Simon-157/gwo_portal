//components
import Cover from "@/assets/write.png";

import NoOngoingJourneyStyles from "./NoAccess.module.css";

import { useNavigate } from "react-router-dom";
import Button from "@/components/button/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { access } from "@/utils/routes";
import { useAuth } from "@/contexts/authUser";

const NoAccess = () => {
  const { user, loading } = useAuth();

  const router = useRouter();
  
  const buttonStyle = {
    marginBottom: "1rem",
  };
  const handleClick = () => {
    router.push(`/blog/${access}`);
  };

  return (
    <main className={NoOngoingJourneyStyles.home__container}>
      <div className={NoOngoingJourneyStyles.home__wrapper}>
        <section className={NoOngoingJourneyStyles.home__wrapper__text}>
          <h2>
            Welcome, <span>{user?.email.split("@")[0]}</span>
          </h2>
          <p>
            umm, it seems you don't have  access to
            <span style={{ color: "var(--app-yellow)" }}> blog</span>
          </p>
          <br />
          <Button
            style={buttonStyle}
            children={<p>request access</p>}
            type={"solid"}
            onClick={handleClick}
          />{" "}
          <br />
          <a href="" style={{ color: "var(--app-yellow)" }}>
            what's the gwo blog about ?
          </a>
        </section>
        <section className={NoOngoingJourneyStyles.home__wrapper__image}>
          <Image src={Cover} alt="Stage One" />
        </section>
      </div>
    </main>
  );
};

export default NoAccess;
