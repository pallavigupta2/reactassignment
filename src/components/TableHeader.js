import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>NAME</TableCell>
        <TableCell>E-MAIL</TableCell>
        <TableCell>PHONE</TableCell>
        <TableCell>CITY</TableCell>
        <TableCell>EDIT</TableCell>
        <TableCell>DELETE</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
