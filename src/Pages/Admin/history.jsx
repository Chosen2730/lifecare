import React, { useEffect, useState } from "react";
import HeaderCard from "../../Components/DoctorDashLayout/headerCard";
import Table from "../../Utils/Table";
import History from "../Dashboard/history";
import SingleHistory from "../../Components/DoctorDashLayout/history";
import { baseUrl, config } from "../../Utils/Constants/constants";
import axios from "axios";
import SingleAdminHistory from "../../Components/AdminDashLayout/history";

const AdminHistory = () => {
  const [history, setHistory] = useState([]);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const header = [
    "Patient's Name",
    "Patient's Email",
    "Patient's Tel",
    "Date",
    "Time",
    "Status",
    "Doctor's Name",
    "Doctor's Email",
    "Doctor's Tel",
  ];

  const getHistory = async () => {
    setLoading(true);
    const url = `${baseUrl}/appointment/all`;

    try {
      const res = await axios.get(url, config(token));
      setHistory(res.data.appointments);
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
      <HeaderCard text='Appointment History' />
      <h2 className='font-bold text-white my-10'>View Appointment History</h2>
      <Table
        loadingState={loading}
        cols='9'
        minSize='1500px'
        headerContent={header}
        data={history}
      >
        {history?.map((item, index) => (
          <div key={index}>
            <SingleAdminHistory
              getHistory={getHistory}
              item={item}
              index={index}
            />
            <hr className='my-4 border-green-50' />
          </div>
        ))}
      </Table>
    </div>
  );
};

export default AdminHistory;
