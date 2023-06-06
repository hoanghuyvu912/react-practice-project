import React, { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((e) => {
          return (
            <Fragment key={e.id}>
              <li>
                {e.name} ({e.age} years old)
              </li>
            </Fragment>
          );
        })}
      </ul>
    </Card>
  );
}
