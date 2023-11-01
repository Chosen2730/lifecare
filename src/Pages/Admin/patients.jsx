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

  const getPatients = async () => {
    setLoading(true);
    try {
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
    getPatients();
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
            <SinglePatient item={item} index={index} />
            <hr className='my-4 border-green-50' />
          </div>
        ))}
      </Table>
    </div>
  );
};

export default Patients;
