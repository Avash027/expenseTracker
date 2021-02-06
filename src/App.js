import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";

import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import List from "./components/List/List";

function App() {
  return (
    <div className="App">
      <Grid
        container
        spacing={1}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
          <br />
          <Details title="Expenses" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
