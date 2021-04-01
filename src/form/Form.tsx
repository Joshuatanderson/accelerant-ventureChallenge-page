import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useState, useEffect } from "react";

type error =
  | {
      message: string;
      type: string;
    }
  | undefined;

type errors = Record<"email" | "name", error>;

const useStyles = makeStyles({
  successText: {
    color: "#0bab31",
  },
});

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<errors>();
  const [success, setSuccess] = useState(false);

  const classes = useStyles({});

  //   email validation
  useEffect(() => {
    const pattern = /@/;
    const emailIsValid = email.match(pattern) || email === "";
    const errorMessage = "Please input a valid email.";
    if (emailIsValid) {
      setErrors({ name: errors?.name, email: undefined });
      return;
    }
    setErrors({
      name: errors?.name,
      email: { type: "email", message: errorMessage },
    });
  }, [email, errors?.name]);

  //   email validation
  useEffect(() => {
    const errorMessage = "Please input your name.";
    if (name || name === "") {
      setErrors({ email: errors?.email, name: undefined });
      return;
    }
    setErrors({
      email: errors?.email,
      name: { type: "name", message: errorMessage },
    });
  }, [name, errors?.email]);

  const attemptSubmission = () => {
    if (!name || !email || errors?.email || errors?.name || success) {
      console.error(errors);
      return;
    }
    // https://github.com/jamiewilson/form-to-google-sheets
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbyCYjH-lt05EhFE-FBvvro8neh9Mc6DHOj8pMSVgmv2eoVedL6bEvqBiU-nwIDmG0MVlw/exec";

    setSuccess(true);

    // create form data to integrate with google sheets
    const form = new FormData();
    form.append("email", email);
    form.append("name", name);
    console.log(form);
    fetch(SCRIPT_URL, {
      method: "POST",
      body: form,
    })
      .then((response) => {
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <Fragment>
      <Grid container item spacing={3}>
        <Grid item sm={4}>
          <TextField
            name="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <Typography color="error">{errors?.email?.message}</Typography>
        </Grid>
        <Grid item sm={4}>
          <TextField
            name="name"
            label="Name"
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <Typography color="error">{errors?.name?.message}</Typography>
        </Grid>
      </Grid>
      {success && (
        <Grid item xs={12}>
          <Typography className={classes.successText} variant="h6">
            Thanks! We'll stay in touch!
          </Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={attemptSubmission}>
          Submit
        </Button>
      </Grid>
    </Fragment>
  );
};

export default Form;
