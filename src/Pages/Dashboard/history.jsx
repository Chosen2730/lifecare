import React, { useEffect, useState } from "react";
import HeaderCard from "../../Components/DashboardLayout/headerCard";
import Table from "../../Utils/Table";
import SingleAppointment from "../../Components/Appointments/singleAppointment";
import { baseUrl, config } from "../../Utils/Constants/constants";
import axios from "axios";

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const header = [
    "Doctor's Name",
    "Doctor's Specification",
    "Consultancy Fee",
    "Date",
    "Time",
    "Status",
    "Action",
  ];

  const getHistory = async () => {
    setLoading(true);
    const url = `${baseUrl}/appointment`;
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
        cols='7'
        minSize='1000px'
        headerContent={header}
        data={history}
      >
        {history?.map((item, index) => (
          <div key={index}>
            <SingleAppointment
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

export default History;
