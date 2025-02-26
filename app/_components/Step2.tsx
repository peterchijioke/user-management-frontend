import { useFormContext } from "react-hook-form";

const Step2: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{
    contact: {
      email: string;
      phoneNumber: string;
      fax?: string;
      linkedInUrl?: string;
    };
  }>();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl">Step 2: Contact Info</h2>
      <div>
        <input
          {...register("contact.email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          placeholder="Email"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
        {errors.contact?.email && (
          <p className="text-red-500">{errors.contact.email.message}</p>
        )}
      </div>
      <div>
        <input
          {...register("contact.phoneNumber", {
            required: "Phone number is required",
          })}
          placeholder="Phone Number"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
        {errors.contact?.phoneNumber && (
          <p className="text-red-500">{errors.contact.phoneNumber.message}</p>
        )}
      </div>
      <div>
        <input
          {...register("contact.fax")}
          placeholder="Fax"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
      </div>
      <div>
        <input
          {...register("contact.linkedInUrl")}
          placeholder="LinkedIn URL"
          className=" border rounded h-11 w-full border-b-gray-400 px-3 outline-none focus-visible:ring-transparent "
        />
      </div>
    </div>
  );
};

export default Step2;
