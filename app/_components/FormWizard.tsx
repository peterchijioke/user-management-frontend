"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useRouter } from "next/navigation";
import { createUser } from "@/services/user.service";
import { User } from "@/types/user";

const FormWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const methods = useForm<User>();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const onSubmit = (data: User) => {
    if (step === 4) {
      dispatch(createUser(data));
      router.push("/");
    } else {
      setStep(step + 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="container mx-auto p-4"
      >
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="btn bg-gray-500 text-white h-11 px-8 rounded"
            >
              Previous
            </button>
          )}
          <button
            type="submit"
            className="btn bg-blue-500 text-white h-11 px-8 rounded"
          >
            {step === 4 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormWizard;
