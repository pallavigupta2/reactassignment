import React, { useEffect } from "react";
import { USER_API } from "../utils/constant";
import { Paper, TableContainer } from "@mui/material";
import TableHeader from "./TableHeader";
import UserTableBody from "./UserTableBody";
import { useDispatch } from "react-redux";
import { addUserData } from "../utils/userSlice";

const UserTable = () => {
  const dispatch = useDispatch();
  const fetchUsersData = async () => {
    const data = await fetch(USER_API);
    const json = await data.json();
    dispatch(addUserData(json));
  };
  useEffect(() => {
    fetchUsersData();
  }, []);
  return (
    <TableContainer
      component={Paper}
      style={{ width: "70%", margin: "0 auto" }}
    >
      <TableHeader />
      <UserTableBody />
    </TableContainer>
  );
};

export default UserTable;
