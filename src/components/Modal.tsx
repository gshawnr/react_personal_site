import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={style.modal_button} onClick={handleOpen}>
        ABOUT ME
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {text}
        </Box>
      </Modal>
    </div>
  );
}

const text = (
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet
    est id nisi faucibus auctor. Nunc tempus blandit justo vitae tempor. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
    himenaeos. Curabitur pellentesque iaculis tempor. Sed eget egestas mauris,
    sed tempor metus. Nam quis lectus id mi cursus semper. Cras eget tempor
    quam. Phasellus aliquet sed nisl non porttitor. Phasellus dapibus vehicula
    massa, ac tristique orci ultricies in. Sed finibus velit lacus, eu tincidunt
    odio vestibulum a. Phasellus metus ex, scelerisque quis lectus sed,
    tristique gravida justo.
    <br />
    <br />
    Pellentesque at dolor dignissim, scelerisque turpis at, bibendum lorem.
    Nulla vitae commodo enim. Integer ut massa placerat, feugiat tortor non,
    scelerisque enim. Sed nec placerat eros, a mattis odio. Nunc eget vulputate
    dui. Pellentesque ultricies, turpis a aliquam venenatis, elit velit lacinia
    lectus, a egestas tortor mi at ex. Duis non varius leo, sed posuere turpis.
    Nam fermentum justo nec nibh maximus, posuere tincidunt tellus pharetra.
    Proin molestie, lectus vitae bibendum pretium, urna eros pretium neque, a
    porta nibh justo quis ex.
    <br />
    <br />
    Nunc malesuada lobortis turpis, quis euismod libero finibus vel. Suspendisse
    potenti. Vivamus faucibus bibendum odio, sed sollicitudin purus. Nunc non
    tempus ante. Suspendisse cursus ultricies risus vitae luctus. Aenean egestas
    scelerisque lectus nec laoreet. Duis convallis lectus eget leo porta cursus.
    Praesent urna sem, lacinia eu quam in, ornare fringilla sem. Pellentesque
    mollis sodales imperdiet. Sed eleifend nisi at dolor tempor, id vulputate
    leo elementum. Nullam imperdiet gravida mauris et scelerisque. Cras tempor
    mauris sit amet congue ultricies. Suspendisse felis massa, luctus non
    molestie eget, ornare in nisl. In tincidunt mauris id metus porta
    condimentum. Duis ultrices libero et consectetur suscipit. Aliquam erat
    volutpat. Nulla arcu nulla, hendrerit sed imperdiet ac, imperdiet nec leo.
    Vestibulum a egestas odio. Nullam ut magna rhoncus, lacinia tellus eget,
    elementum ligula. Quisque sollicitudin porttitor scelerisque. Ut facilisis
    augue sed elit pretium euismod.
  </Typography>
);

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
  modal_button: {
    padding: "10px 20px",
    fontSize: "22px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    whiteSpace: "nowrap",
    backgroundColor: "#0b2447",
    color: "#fcffe7",
    "&:hover": {
      backgroundColor: "#fcffe7",
      color: "#0b2447",
    },
  },
};
