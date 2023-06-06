import React, { Fragment } from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

export default function ErrorModal(props) {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className={classes.content}>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Close</Button>
        </footer>
      </Card>
    </Fragment>
  );
}
