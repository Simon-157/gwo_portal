import { useState } from "react";

// Component
import GoBack from "./GoBack";


//Styles
import StageStyles from "./Stage.module.css";
import ImageUploader from "@/components/image_upload/ImageUploader";

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
                    <p>
                        Upgrade your profile with an appropriate image of you
                    </p>
                 
                    <div className={StageStyles.challenge__container__list}>
                        <ImageUploader />
                    </div>
                </div>
                <div className={StageStyles.wrapper__roundButton}>
                </div>
            </div>
        </>
    );
};

export default StageThree;




