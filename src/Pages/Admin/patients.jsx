import React, { useEffect, useState } from "react";
import HeaderCard from "../../Components/AdminDashLayout/headerCard";
import Table from "../../Utils/Table";
import { baseUrl, config } from "../../Utils/Constants/constants";
import axios from "axios";
import SinglePatient from "../../Components/AdminDashLayout/patient";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const header = ["Name", "Email", "Tel", "Gender", "Age"];

  const getHistory = async () => {
    setLoading(true);
    const url1 = `${baseUrl}/doctor`;

    try {
      const doctor = await axios.get(url1, config(token));
      const id = doctor.data.doctor?._id;
      const url = `${baseUrl}/patient/all`;
      const res = await axios.get(url, config(token));
      setPatients(res.data.patients);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div>
      <HeaderCard text='All Patients' />
      <div className='mt-10' />
      <Table
        loadingState={loading}
        cols='5'
        minSize='1000px'
        headerContent={header}
        data={patients}
      >
        {patients?.map((item, index) => (
          <div key={index}>
            <SinglePatient getHistory={getHistory} item={item} index={index} />
            <hr className='my-4 border-green-50' />
          </div>
        ))}
      </Table>
    </div>
  );
};

export default Patients;
