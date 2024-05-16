import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
// import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import "./modal.scss";

export const ModalWindow = ({open, setOpen, children}) => {
  return (
    <Modal      
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sheet
        variant="plain"
        color="#e8a306"    
        sx={{
          maxWidth: 500,
          minWidth: 340,
          borderRadius: "md",
          p: 3,
          //   color: 'orange',
          border: "2px solid #393636;",
          boxShadow: "lg",
          outline: "none",
          background: "#ffffff3b",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1, color: "red" }} />
        {children}
      </Sheet>
    </Modal>
  );
};
