export interface UserContact {
  id?: string;
  email: string;
  phoneNumber: string;
  fax?: string;
  linkedInUrl?: string;
}

export interface UserAddress {
  id?: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface AcademicBackground {
  id?: string;
  schoolName: string;
  degree?: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
}

export interface User {
  id?: string;
  profilePhoto?: string;
  firstName: string;
  lastName: string;
  dob: string;
  occupation: string;
  gender: string;
  contact: UserContact;
  address: UserAddress;
  academicBackgrounds: AcademicBackground[];
}