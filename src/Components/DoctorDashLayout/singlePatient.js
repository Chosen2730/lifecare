import React from "react";

const SinglePatient = ({ item }) => {
  console.log(item);
  const {
    address,
    age,
    bloodGroup,
    email,
    emergencyContact,
    firstName,
    genotype,
    lastName,
    maritalStatus,
    sex,
    state,
    surname,
    tel,
  } = item || {};
  return (
    <div className='rounded-md grid grid-cols-10 text-xs gap-2'>
      <h2>
        {firstName} {lastName} {surname}
      </h2>
      <h2>{age}</h2>
      <h2>{email.length > 20 ? `${email.slice(0, 20)}...` : email}</h2>
      <h2>{tel}</h2>
      <h2>{sex}</h2>
      <h2>{emergencyContact}</h2>
      <h2>{bloodGroup}</h2>
      <h2>{genotype}</h2>
      <h2>{maritalStatus}</h2>
      <h2>
        {address}, {state}
      </h2>
    </div>
  );
};

export default SinglePatient;
