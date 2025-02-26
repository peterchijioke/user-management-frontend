"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchUser } from "@/services/user.service";
import { AcademicBackground } from "@/types/user";

export default function UserDetail() {
  const dispatch: AppDispatch = useDispatch();
  const params = useParams();
  const id = params.id as string;
  const { currentUser, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    if (id) dispatch(fetchUser(id));
  }, [id, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!currentUser) return null;

  return (
    <div className="p-6 container mt-8 mx-auto bg-gray-100 rounded shadow">
      <h1 className="text-3xl font-bold">
        {currentUser.firstName} {currentUser.lastName}
      </h1>
      <p className="text-lg">{currentUser.occupation}</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>Email: {currentUser.contact.email}</p>
        <p>Phone: {currentUser.contact.phoneNumber}</p>
        {currentUser.contact.fax && <p>Fax: {currentUser.contact.fax}</p>}
        {currentUser.contact.linkedInUrl && (
          <p>LinkedIn: {currentUser.contact.linkedInUrl}</p>
        )}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Address</h2>
        <p>{currentUser.address.address}</p>
        <p>
          {currentUser.address.city}, {currentUser.address.state},{" "}
          {currentUser.address.zipCode}
        </p>
        <p>{currentUser.address.country}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Academic Background</h2>
        {currentUser.academicBackgrounds.map((edu: AcademicBackground) => (
          <div key={edu.id} className="mt-2">
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
}
