import React, { useEffect, useState } from "react";
import HeaderCard from "../../Components/DoctorDashLayout/headerCard";
import searchIcon from "../../Assets/images/search2.png";
import Table from "../../Utils/Table";
import SinglePatient from "../../Components/DoctorDashLayout/singlePatient";
import { baseUrl, config } from "../../Utils/Constants/constants";
import axios from "axios";

const DoctorSearch = () => {
  const [key, setKey] = useState("male");
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const header = [
    "Name",
    "Age",
    "Email",
    "Tel No",
    "Sex",
    "Emergency Contact",
    "Blood Group",
    "Blood Type",
    "Marital Status",
    "Address",
  ];

  const getSearchPatients = async () => {
    setLoading(true);
    const url = `${baseUrl}/patient/search/${key}`;
    try {
      const res = await axios.get(url, config(token));
      setPatients(res.data.patient);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSearchPatients();
  }, [key]);

  return (
    <div>
      <HeaderCard text='Search' />
      <div className='p-5 md:p-8'>
        <div className='bg-white p-5'>
          <div className='relative max-w-xl mx-auto'>
            <img
              src={searchIcon}
              className='absolute top-3 left-5'
              alt='search'
            />
            <input
              className='rounded-full border-sky-500 border-[2px] p-3 w-full pl-14'
              type='text'
              name=''
              id=''
              onChange={(e) => setKey(e.target.value)}
              value={key}
              placeholder='search'
            />
            <p className='text-xs text-center my-1 text-sky-300'>
              Enter search keyword (name, age, email, phone number etc)
            </p>
          </div>
          <h2 className='text-lg text-sky-500 my-5 text-center'>
            Search Results
          </h2>
          <Table
            cols='10'
            minSize='1400px'
            headerContent={header}
            data={patients}
            loadingState={loading}
          >
            {patients?.map((item, index) => (
              <div key={index}>
                <SinglePatient item={item} index={index} />
                <hr className='my-4 border-green-50' />
              </div>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DoctorSearch;
