import React, { useEffect, useState, useRef } from "react";
import { Fab } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import useStyles from "./style";
import { fetchHospitalListing } from "Store/action";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import Input from "@material-ui/core/Input";

import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";

const Layout = () => {
  const classes = useStyles();
  const chatContainerRef = useRef(null);
  const [chats, setChats] = useState([
    "Hello Docotor,I am Sailesh",
    "I have Suffering From Fever",
  ]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchHospitalListing();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleclick = () => {
    if (!message) {
      return;
    }

    setChats([...chats, message]);
    setMessage("");

  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle
          id="form-dialog-title"
          style={{ borderBottom: "1px solid #ddd", color: "#999999" }}>
          Chat With Doctor AI
        </DialogTitle>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}>
          <CloseIcon />
        </IconButton>

        <DialogContent className={classes.chatBoard}>
          <section className={classes.msgChat}>
            <div className={classes.msg}>
              <div className={classes.msgImg}></div>
              <div
                className={classes.msgbubble}
                style={{ borderBottomLeftRadius: 0 }}>
                <div className={classes.msgInfo}>
                  <div className={classes.msgSenderName}>Dr.{" "}Sarad Patel</div>
                  <div className={classes.msgTime}>12.12</div>
                </div>
                <div className={classes.msgText}>
                  Hii,This Is Sarad Patel From Narayan Hospital, Tell Me How I Can Help You...
                </div>
              </div>
            </div>
            {/* start */}
            {chats.map((item, key) => (
              <div key={key}>
                <div
                  className={classes.msg}
                  style={{ flexDirection: "row-reverse" }}>
                  <div
                    className={classes.msgImgRight}
                    style={{ margin: "0 0 0 10px" }}></div>
                  <div
                    className={classes.msgbubble}
                    style={{
                      color: "#fff",
                      background: "#7563FF",
                      borderBottomLeftRadius: 0
                    }}>
                    <div className={classes.msgInfo}>
                      <div className={classes.msgSenderName}>kishan</div>
                      <div className={classes.msgTime}>12.00</div>
                    </div>
                    <div className={classes.msgText}>{item}</div>
                  </div>
                </div>
              </div>
            ))}
            <div ref={chatContainerRef} />
          </section>
        </DialogContent>
        <DialogActions className={classes.inputBox}>
          <Input
            fullWidth
            placeholder="Type a massage"
            value={message}
            multiline
            onChange={e => setMessage(e.target.value)}
          />
          <IconButton>
            <MicIcon color="primary" />
          </IconButton>
          <IconButton onClick={handleclick}>
            <SendIcon color="primary" />
          </IconButton>
        </DialogActions>
      </Dialog>
      <Fab
        color="primary"
        className={classes.absolute}
        onClick={handleClickOpen}>
        <ChatIcon />
      </Fab>
    </div>
  );
};

export default Layout;
