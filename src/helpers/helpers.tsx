import moment from "moment";
import { User, UserWithDate } from "../dto/TypesUser";

export const addDate = (data: Array<User> = []) => {
  return data.map((user) => ({ ...user, Date: moment().format("L") }));
};

export const filterData = (data: Array<UserWithDate>) => {
  return data.filter((user) => user.Status === "Active");
};

export const sortUserData = (
  data: Array<UserWithDate>,
  propertyName: keyof UserWithDate,
  order: string
) => {
  const sortedData = data.sort((a, b) => {
    if (a[propertyName] < b[propertyName]) {
      return -1;
    }
    if (a[propertyName] > b[propertyName]) {
      return 1;
    }
    return 0;
  });

  console.log(sortedData);

  if (order === "descending") {
    return sortedData.reverse();
  }

  return sortedData;
};