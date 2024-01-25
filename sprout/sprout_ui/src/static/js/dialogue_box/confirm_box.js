import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ConfirmDialog({ open, onClose, onConfirm, title, message }) {
    const handleClose = (e) => {
        e.stopPropagation()
        onClose(false);
    };
  
    const handleConfirm = (e) => {
        e.stopPropagation()
        onConfirm();
        onClose(false);
    };
    
    const handleDialogClick = (e) => {
        e.stopPropagation();
    }
    return (
      <Dialog open={open} onClose={handleClose} onClick = {(e) =>{handleDialogClick(e)}}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ (e) => {handleClose(e)}} color="primary">
            Cancel
          </Button>
          <Button onClick={ (e) => {handleConfirm(e)}} color="secondary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

export default ConfirmDialog;
