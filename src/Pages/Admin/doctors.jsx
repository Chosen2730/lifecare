import React, { useEffect, useState } from "react";
import HeaderCard from "../../Components/AdminDashLayout/headerCard";
import Table from "../../Utils/Table";
import { baseUrl, config } from "../../Utils/Constants/constants";
import axios from "axios";
import SinglePatient from "../../Components/AdminDashLayout/patient";
import SingleDoctor from "../../Components/AdminDashLayout/doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const header = [
    "Name",
    "Email",
    "Tel",
    "Gender",
    "Consultation Fee",
    "Specialization",
  ];

  const getDoctors = async () => {
    setLoading(true);
    const url1 = `${baseUrl}/doctor`;

    try {
      const doctor = await axios.get(url1, config(token));
      const id = doctor.data.doctor?._id;
      const url = `${baseUrl}/doctor/all`;
      const res = await axios.get(url, config(token));
      setDoctors(res.data.doctors);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div>
      <HeaderCard text='All Doctors' />
      <div className='mt-10' />
      <Table
        loadingState={loading}
        cols='6'
        minSize='1000px'
        headerContent={header}
        data={doctors}
      >
        {doctors?.map((item, index) => (
          <div key={index}>
            <SingleDoctor item={item} index={index} />
            <hr className='my-4 border-green-50' />
          </div>
        ))}
      </Table>
    </div>
  );
};

export default Doctors;
