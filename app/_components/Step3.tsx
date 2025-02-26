import { useFormContext } from "react-hook-form";

type FormData = {
  address: {
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
};

const Step3: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl">Step 3: Address</h2>
      <div>
        <input
          {...register("address.address", { required: "Address is required" })}
          placeholder="Street Address"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message as string}</p>
        )}
      </div>
      <div>
        <input
          {...register("address.city", { required: "City is required" })}
          placeholder="City"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
        {errors.address && (
          <p className="text-red-500">{errors.address?.message as string}</p>
        )}
      </div>
      <div>
        <input
          {...register("address.state", { required: "State is required" })}
          placeholder="State"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message as string}</p>
        )}
      </div>
      <div>
        <input
          {...register("address.country", { required: "Country is required" })}
          placeholder="Country"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message as string}</p>
        )}
      </div>
      <div>
        <input
          {...register("address.zipCode", { required: "Zip code is required" })}
          placeholder="Zip Code"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message as string}</p>
        )}
      </div>
    </div>
  );
};

export default Step3;
