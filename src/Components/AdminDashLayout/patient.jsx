import React from "react";
const SinglePatient = ({ item }) => {
  const {
    firstName,
    surname,
    lastName,
    email,
    tel,
    _id: id,
    sex,
    age,
  } = item || {};

  return (
    <div className='rounded-md grid grid-cols-5 text-xs gap-2 capitalize'>
      <h2>
        {firstName} {lastName} {surname}
      </h2>
      <h2>{email.length > 20 ? `${email.slice(0, 20)}...` : email}</h2>
      <h2>{tel}</h2>
      <h2>{sex}</h2>
      <h2>{age}</h2>
    </div>
  );
};

export default SinglePatient;
