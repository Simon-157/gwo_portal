import React, { useState, ChangeEvent } from 'react';
import StageStyles from "./Stage.module.css";
import Cover from "@/assets/handyBlog.png";

import GoBack from "./GoBack";
import Input from '@/components/input-field/Input';
import Button from '@/components/button/Button';
import Image from 'next/image';

interface RadioOption {
  label: string;
  value: string;
}

interface StageTwoProps {
  handleSubmit: (data: any) => void;
  handleGoBack: () => void;
}

const StageTwo: React.FC<StageTwoProps> = ({ handleSubmit, handleGoBack }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };




  const radioOptions: RadioOption[] = [
    { label: "Student - High School", value: "Basic" },
    { label: "Student - Undergraduate", value: "Undergraduate" },
    { label: "Student - Postgraduate", value: "Postgraduate" },
    { label: "Worker - Self Emplloyed", value: "Employee" },
  ];


  const handleStageTwoSubmit = () => {
    const data = {
      profession: selectedOption,
    };

    handleSubmit(data);
  };

  return (
    <div className={StageStyles.container}>
      <div className={StageStyles.textColumn}>
        <GoBack handleGoBack={handleGoBack} />
        <h2>How long do you wanna go at it?</h2>
        <br />
        <div className={StageStyles.radio_button}>
          {radioOptions.map((option: RadioOption) => (
            <Input
              key={option.value}
              type="radio"
              label={option.label}
              name="duration"
              value={option.value}
              onChange={handleOptionChange}
              checked={selectedOption === option.value}
            />
          ))}
        </div>
        <br />
        <Button onClick={handleStageTwoSubmit} children={<h3>next</h3>} type={''}></Button>
      </div>

      <div className={StageStyles.imageColumn}>
        <Image width={500}  height={500} className={StageStyles.img} src={Cover} alt="Stage One" />
      </div>
    </div>
  );
};

export default StageTwo;
