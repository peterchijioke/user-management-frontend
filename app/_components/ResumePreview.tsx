"use client";

import { useFormContext } from "react-hook-form";

const ResumePreview: React.FC = () => {
  const { watch } = useFormContext();
  const formData = watch();

  return (
    <div className="mt-6 p-6 bg-gray-100 rounded shadow">
      <h1 className="text-3xl font-bold">
        {formData.firstName} {formData.lastName}
      </h1>
      <p className="text-lg">{formData.occupation}</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>Email: {formData.contact?.email}</p>
        <p>Phone: {formData.contact?.phoneNumber}</p>
        {formData.contact?.fax && <p>Fax: {formData.contact.fax}</p>}
        {formData.contact?.linkedInUrl && (
          <p>LinkedIn: {formData.contact.linkedInUrl}</p>
        )}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Address</h2>
        <p>{formData.address?.address}</p>
        <p>
          {formData.address?.city}, {formData.address?.state},{" "}
          {formData.address?.zipCode}
        </p>
        <p>{formData.address?.country}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Academic Background</h2>
        {formData.academicBackgrounds?.map((edu: any, index: number) => (
          <div key={index} className="mt-2">
            <p>
              <strong>{edu.schoolName}</strong>
            </p>
            {edu.degree && (
              <p>
                {edu.degree} in {edu.fieldOfStudy}
              </p>
            )}
            {edu.startDate && edu.endDate && (
              <p>
                {edu.startDate} - {edu.endDate}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePreview;
