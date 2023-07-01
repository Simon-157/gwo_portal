import { useState } from "react";

// Component
import GoBack from "./GoBack";


//Styles
import StageStyles from "./Stage.module.css";

interface StageThreeProps {
    handleSubmit: () => void;
    handleGoBack: () => void;
}

const StageThree: React.FC<StageThreeProps> = ({ handleSubmit, handleGoBack }) => {
    const [progressVal] = useState<number>(50);

    return (
        <>
            <div className={StageStyles.challenge__container}>
                <GoBack handleGoBack={handleGoBack} />
                <div className={StageStyles.text__row}>
                    <small>
                        select up to X challenges to include in your freak journey{" "}
                    </small>
                    <small>click the plus button to create custom challenges</small>
                    {/* TODO: DISPLAY ADDED CHALLENGES HERE */}
                    <div className={StageStyles.challenge__container__list}>
                    </div>
                </div>
                <div className={StageStyles.wrapper__roundButton}>
                </div>
            </div>
        </>
    );
};

export default StageThree;




