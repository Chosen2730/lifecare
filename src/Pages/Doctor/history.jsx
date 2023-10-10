import React, { useEffect, useState } from "react";
import HeaderCard from "../../Components/DoctorDashLayout/headerCard";
import Table from "../../Utils/Table";
import History from "../Dashboard/history";
import SingleHistory from "../../Components/DoctorDashLayout/history";
import { baseUrl, config } from "../../Utils/Constants/constants";
import axios from "axios";

const DoctorHistory = () => {
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
    "Action",
  ];

  const getHistory = async () => {
    setLoading(true);
    const url1 = `${baseUrl}/doctor`;

    try {
      const doctor = await axios.get(url1, config(token));
      const id = doctor.data.doctor?._id;
      const url = `${baseUrl}/appointment/${id}`;
      const res = await axios.get(url, config(token));
      // const url3 = `${baseUrl}/patient/${}`;
      // const pat = await axios.get(url, config(token));
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
            <SingleHistory getHistory={getHistory} item={item} index={index} />
            <hr className='my-4 border-green-50' />
          </div>
        ))}
      </Table>
    </div>
  );
};

export default DoctorHistory;
