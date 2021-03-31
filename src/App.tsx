import React from "react";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Input,
  makeStyles,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { theme } from "./theme";
import Header from "./header/Header";
import classes from "*.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    marginTop: "5vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Grid container spacing={3} className={classes.main}>
            <Grid item xs={12}>
              <Typography variant="h3">
                Go from no coding skill to software developer in six months.
              </Typography>
              <Typography variant="h5">
                An in-person coding bootcamp based in Baton Rouge, LA.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Coming soon.</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Get in touch:</Typography>
            </Grid>
            <Grid container item spacing={3}>
              <Grid item sm={4}>
                <TextField label="Email"></TextField>
              </Grid>
              <Grid item sm={4}>
                <TextField label="Name"></TextField>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">Submit</Button>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
