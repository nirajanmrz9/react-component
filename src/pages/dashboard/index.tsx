import React from 'react'
import DynamicTable, { THeadType } from '../../components/table';
import { AdminAlerType } from '../../types/tableTypes';
const headerData: THeadType<AdminAlerType>[] = [
    {
      h: "Name",
      accessor: "alertType",
    },
    {
      h: "Status",
      accessor: "site",
    },
  ];
  
const Dashboard = () => {
  return (
    <DynamicTable thData={headerData} tdData={[]} />
    )
}

export default Dashboard