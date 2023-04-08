import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

type ModalProps = {
  modalState: boolean;
  changeModalState: (state: boolean) => void;
  modalTitle: string;
  modalBody?: string;
};

export default function BasicModal({
  changeModalState,
  modalBody,
  modalState,
  modalTitle,
}: ModalProps) {
  return (
    <div>
      <Modal
        open={modalState}
        onClose={() => changeModalState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalBody}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  modal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px thin #0b2447",
    boxShadow: 24,
    p: 4,
  },
};
