import { CorrectIcon, SwapIcon, AbortIcon, BulbIcon } from "@/assets/icons/Icons";
import Button from "@/components/button/Button";
import OngoingJourneyStyles from "./OngoingJourney.module.css";
import darkBell from "@/assets/images/dark-bell.png";
import darkClock from "@/assets/images/dark-clock.png";
import Image from "next/image";
import CircularProgressBar from "@/components/progress_bar/circular_progress_bar/CircularProgressBar";
const OnGoingJourney = () => {


  


  return (
    <div className={OngoingJourneyStyles.wrapper}>
      <div className={OngoingJourneyStyles.mission_announcement}>
        <Image src={darkBell} alt="" />
        <h1>Today's Mission</h1>
      </div>
      <div className={OngoingJourneyStyles.mission_display}>
        <h2>Ask your crush out</h2>
        <div className={OngoingJourneyStyles.stats}>
          statistics
          {/* TODO : Map the metric for the statistics here with style*/}
          
          </div>
        <div className={OngoingJourneyStyles.mission_content}>
          <h1>Ask your crush out</h1>
          <Button
            style={{
              backgroundColor: "rgb(255 255 255 / 0.1)",
              border: "none",
              color: "var(--app-white)",
            }} children={<>description</>} type={""}      />
        </div>
        <div className={OngoingJourneyStyles.mission_stats}>
          <CircularProgressBar total={28} chunk={7} label="completed" bgColor={""} arcColor={""} />
          <CircularProgressBar total={3} chunk={3} label="swaps" bgColor={""} arcColor={""} />
          <CircularProgressBar total={3} chunk={1} label="aborted" bgColor={""} arcColor={""} />
        </div>
      </div>
      <div className={OngoingJourneyStyles.timer_action_buttons}>
        <Image src={darkClock} alt="fefe" />

        {/* TODO : replace with timeLeftFormatted */}
        <h1>07:04:12</h1>
        <div className={OngoingJourneyStyles.action_buttons}>
          <Button
            style={{
              backgroundColor: "rgba(191,249,231,0.1)",
              minWidth: "2rem",
              border: "none",
              color: "var(--app-green)",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }} children={<><CorrectIcon /><p>done</p></>} type={""}          />
            
          <Button
            style={{
              backgroundColor: "rgba(250,228,173,0.1)",
              minWidth: "2rem",
              border: "none",
              color: "var(--app-yellow)",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }} children={<><SwapIcon /> <p>swap</p></>} type={""}          />

          <Button
            style={{
              backgroundColor: "rgba(244,152,103,0.1)",
              minWidth: "2rem",
              border: "none",
              color: "var(--app-orange)",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }} children={<><AbortIcon /> <p>abort</p></>} type={""}     />
        </div>
      </div>
      <div className={OngoingJourneyStyles.shared_experience_prompt}>
        <article>
          <BulbIcon />
          <small>
            27 people have completed this challenge; they have share their
            experience and tips
          </small>
        </article>
        <br />
        <Button style={{ padding: "0.5rem" }} children={<h3>read</h3>} type={""} />
      </div>
    </div>
  );
};

export default OnGoingJourney;
