import {
  Button,
  TableBody,
  TableCell,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserData, updateUserData } from "../utils/userSlice";

const UserTableBody = () => {
  const userData = useSelector((store) => store.user.userData);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUserData(id));
  };
  const handleEdit = (user) => {
    setCurrentUser(user);
    setOpen(true);
  };
  const handleSave = () => {
    if (currentUser) {
      dispatch(
        updateUserData({ id: currentUser.id, updatedData: currentUser })
      );
    }
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <TableBody>
        {userData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>
              {item.address.city} - {item.address.zipcode}
            </TableCell>
            <TableCell>
              <Button onClick={() => handleEdit(item)}>Edit</Button>
            </TableCell>
            <TableCell>
              <Button onClick={() => handleDelete(item.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {currentUser && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit User</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              value={currentUser.name}
              onChange={(e) =>
                setCurrentUser({ ...currentUser, name: e.target.value })
              }
              fullWidth
              margin="dense"
            />
            <TextField
              label="Email"
              value={currentUser.email}
              onChange={(e) =>
                setCurrentUser({ ...currentUser, email: e.target.value })
              }
              fullWidth
              margin="dense"
            />
            <TextField
              label="Phone"
              value={currentUser.phone}
              onChange={(e) =>
                setCurrentUser({ ...currentUser, phone: e.target.value })
              }
              fullWidth
              margin="dense"
            />
            <TextField
              label="City"
              value={currentUser.address.city}
              onChange={(e) =>
                setCurrentUser({
                  ...currentUser,
                  address: { ...currentUser.address, city: e.target.value },
                })
              }
              fullWidth
              margin="dense"
            />
            <TextField
              label="ZipCode"
              value={currentUser.address.zipcode}
              onChange={(e) =>
                setCurrentUser({
                  ...currentUser,
                  address: { ...currentUser.address, zipcode: e.target.value },
                })
              }
              fullWidth
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default UserTableBody;
