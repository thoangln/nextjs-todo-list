import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import AddTodo from "./addTodo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { closeModal } from "@/redux/slices/modalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modalReducer);
  const { isModalOpen, typeModal } = modalData;
  const [open, setOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState(false);
  const handleClose = () => dispatch(closeModal());
  console.log({ modalData });
  useEffect(() => {
    setOpen(isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    if (typeModal) setModalComponent(typeModal);
  }, [typeModal]);

  const ModalBody = () => {
    switch (modalComponent) {
      case "addTodo":
        return <AddTodo />;
      default:
        return <></>;
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBody />
      </Modal>
    </div>
  );
}
