import { Box, Paper } from "@mui/material";
import Modal from "@mui/material/Modal";

import "./Modal.css";

type ModalProps = {
  modalState: boolean;
  changeModalState: (state: boolean) => void;
  modalBody?: React.ReactNode;
};

export default function BasicModal({
  changeModalState,
  modalBody,
  modalState,
}: ModalProps) {
  return (
    <div className="modal-container">
      <Modal
        open={modalState}
        onClose={() => changeModalState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modal}>
          <Paper elevation={3}>{modalBody}</Paper>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    bgcolor: "background.paper",
    border: "2px thin #0b2447",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
  },
};
