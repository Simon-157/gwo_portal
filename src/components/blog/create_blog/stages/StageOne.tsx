import React, { useState } from 'react';

import StageStyles from "./Stage.module.css";
import Cover from "@/assets/handyBlog.png";
import GoBack from "./GoBack";
import Input from '@/components/input-field/Input';
import Button from '@/components/button/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface StageOneProps {
  handleSubmit: (data: any) => void;
  handleGoBack: () => void;
}

const StageOne: React.FC<StageOneProps> = ({ handleSubmit }) => {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleGoBack = () => {
    router.back()
  };

  const handleStageOneSubmit = () => {
    const data = {
      name: name,
    };

    handleSubmit(data);
  };

  return (
    <div className={StageStyles.container}>
      <div className={StageStyles.textColumn}>
        <GoBack handleGoBack={handleGoBack} />

        <h2>What do you wanna call the Journey?</h2>
        <br />
        <Input
          name="name"
          placeholder="name"
          style={{ width: "13rem" }}
          value={name}
          onChange={(e:any) => setName(e.target.value)}
        />
        <br />
        <Button onClick={handleStageOneSubmit} style={{ width: "13rem" }} children={<h3>next</h3>} type={'solid'} />
       
      </div>
      <div className={StageStyles.imageColumn}>
        <Image width={500}  height={500} className={StageStyles.img} src={Cover} alt="Stage 3" />

      </div>
    </div>
  );
};

export default StageOne;
