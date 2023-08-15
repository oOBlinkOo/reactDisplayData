import React, { useMemo, useState } from "react";
import { UserData, UserWithDate } from "../dto/TypesUser";
import { addDate, filterData, sortUserData } from "../helpers/helpers";
import DisplayData from './DisplayData';
import HeaderTable from "./HeaderTable";

const Table: React.FC<UserData> = ({ listUsers }) => {
  const [sortedItem, setSortedItem] = useState({
    property: "Name",
    asc: true,
  });

  const onPropertyChange = (property: keyof UserWithDate) => {
    if (sortedItem.property === property) {
      setSortedItem({ ...sortedItem, asc: !sortedItem.asc });
    } else {
      setSortedItem({ ...sortedItem, property: property });
    }
  };

  const sortedUserDate = useMemo(() => {
    const dataWithDates = addDate(listUsers);
    const activeUsers = filterData(dataWithDates);
    const property = sortedItem.property as keyof UserWithDate;
    const asc = sortedItem.asc ? "ascending" : "descending";
    const sortedData = sortUserData(activeUsers, property, asc);
    return sortedData;
  }, [listUsers, sortedItem]);

  
  return (
    <table id="addingCss">
      <HeaderTable onPropertyChange={onPropertyChange} sortedItem={sortedItem}></HeaderTable>
      <DisplayData sortedUserDate={sortedUserDate}></DisplayData>
    </table>
  );
};

export default Table;
