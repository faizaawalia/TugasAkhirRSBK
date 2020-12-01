import React, { } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Cardinfo from './Cardinfo/Cardinfo.jsx'
import Buah from "./Barang/Buah";
import Parent from "./Penjualan/Parent";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,

  },
  title: {
    flexGrow: 0.9,
    fontFamily:
      'roboto',
    fontWeight: 70,

  },
}));


export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <AppBar style={{ background: ' rgb(0, 0, 0)', color: '  rgb(255, 255, 255)' }}>
          <Toolbar >
            <Typography className={classes.title}>
              FRUITS
                </Typography>
            <li className="li">
              <Link style={{ color: '  rgb(255, 255, 255)' }} to="/"> Tampilan Pemesanan </Link>
            </li>

            <li className="li">
              <Link style={{ color: '  rgb(255, 255, 255)' }} to="/parent"> Tampilan Penjualan </Link>
            </li>
            <li className="li">
              <Link style={{ color: '  rgb(255, 255, 255)' }} to="/Cardinfo"> Info Buah </Link>
            </li>
          </Toolbar>
        </AppBar>

      </div>
      <Switch>
        <Route path="/" exact component={Buah} />
      </Switch>
      <Switch>

        <Route path="/Parent" exact component={Parent} />
      </Switch>
      <Switch>

        <Route path="/Cardinfo" exact component={Cardinfo} />
      </Switch>
    </Router>
  );
}


