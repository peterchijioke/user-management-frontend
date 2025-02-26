"use client";
import FormWizard from "../_components/FormWizard";

export default function CreateUser() {
  return (
    <div className="p-4">
      <div className=" container">
        <h1 className="text-2xl font-bold mb-4">Create New User</h1>
      </div>
      <FormWizard />
    </div>
  );
}
