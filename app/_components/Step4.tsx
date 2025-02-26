"use client";

import { useFormContext } from "react-hook-form";
import { Key } from "react";
import ResumePreview from "./ResumePreview";

const Step4: React.FC = () => {
  const {
    watch,
    register,
    formState: { errors },
    setValue,
  } = useFormContext<{
    academicBackgrounds: {
      schoolName?: string;
      degree?: string;
      fieldOfStudy?: string;
      startDate?: string;
      endDate?: string;
    }[];
  }>();
  const academicBackgrounds = watch("academicBackgrounds") || [];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl">Step 4: Academic Background & Review</h2>
      {academicBackgrounds.map((_: any, index: number) => (
        <div key={index} className="border p-4 rounded space-y-5">
          <input
            {...register(`academicBackgrounds.${index}.schoolName`, {
              required: "School name is required",
            })}
            placeholder="School Name"
            className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
          />
          {errors.academicBackgrounds?.[index]?.schoolName && (
            <p className="text-red-500">
              {errors.academicBackgrounds[index].schoolName.message}
            </p>
          )}
          <input
            {...register(`academicBackgrounds.${index}.degree`)}
            placeholder="Degree"
            className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
          />
          <input
            {...register(`academicBackgrounds.${index}.fieldOfStudy`)}
            placeholder="Field of Study"
            className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
          />
          <input
            {...register(`academicBackgrounds.${index}.startDate`)}
            type="date"
            className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
          />
          <input
            {...register(`academicBackgrounds.${index}.endDate`)}
            type="date"
            className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setValue("academicBackgrounds", [...academicBackgrounds, {}])
        }
        className="btn bg-green-500 px-8 py-3 rounded text-white"
      >
        Add School
      </button>
      <ResumePreview />
    </div>
  );
};

export default Step4;
