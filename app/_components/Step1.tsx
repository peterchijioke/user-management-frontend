import { useFormContext } from "react-hook-form";

const Step1: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-8 container">
      <h2 className="text-2xl">Step 1: Personal Info</h2>
      <div>
        <input
          {...register("firstName", { required: "First name is required" })}
          placeholder="First Name"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName?.message as string}</p>
        )}
      </div>
      <div>
        <input
          {...register("lastName", { required: "Last name is required" })}
          placeholder="Last Name"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName?.message as string}</p>
        )}
      </div>
      <div>
        <input
          {...register("dob", { required: "Date of birth is required" })}
          type="date"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
        {errors.dob && (
          <p className="text-red-500">{errors.dob.message as string}</p>
        )}
      </div>
      <div>
        <input
          {...register("occupation", { required: "Occupation is required" })}
          placeholder="Occupation"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
        {errors.occupation && (
          <p className="text-red-500">{errors.occupation.message as string}</p>
        )}
      </div>
      <div>
        <select
          {...register("gender", { required: "Gender is required" })}
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && (
          <p className="text-red-500">{errors.gender?.message as string}</p>
        )}
      </div>
      <div>
        <input
          {...register("profilePhoto")}
          placeholder="Profile Photo URL"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
      </div>
    </div>
  );
};

export default Step1;
