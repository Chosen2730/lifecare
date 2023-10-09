import React from "react";
import HeaderCard from "../../Components/DashboardLayout/headerCard";
import Table from "../../Utils/Table";
import SingleAppointment from "../../Components/Appointments/singleAppointment";

const History = () => {
  const header = [
    "Doctor's Name",
    "Doctor's Specification",
    "Consultancy Fee",
    "Date",
    "Time",
    "Status",
  ];
  return (
    <div>
      <HeaderCard text='Appointment History' />
      <h2 className='font-bold text-white my-10'>View Appointment History</h2>
      <Table cols='6' minSize='1000px' headerContent={header} data={[1, 2]}>
        {[1, 2]?.map((item, index) => (
          <div key={index}>
            <SingleAppointment item={item} index={index} />
            <hr className='my-4 border-green-50' />
          </div>
        ))}
      </Table>
    </div>
  );
};

export default History;
