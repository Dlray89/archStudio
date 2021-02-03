import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Grid,
  makeStyles,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  IconButton,
  Hidden,
  AppBar,
  Toolbar,
  Button
} from "@material-ui/core";
import Logo from "../../assets/logo.svg";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  Nav: {
    marginBottom: "30em",
  },
  imgCOntainer: {},
  logo: {
    marginRight: "3em",
  },
  linksContainer: {
    width: "100%",
  },
  links: {
    fontFamily: "Spartan, sans-serif",
    fontWeight: 600,
    fontSize: "0.75em",
    "&:hover": {
      color: "#7D828F",
    },
  },
  lineContainer: {
    width: "100%",
    marginRight: "3em",
  },
  lineHome: {
    lineHeight: 1,
    marginBottom: "2em",
    opacity: "40%",
  },
  letters: {
    opacity: "30%",
    fontWeight: 700,
    fontFamily: "Spartan, sans-serif",
    marginBottom: "0.55em",
  },
  containerOne: {
    width: "8%",
  },
  containerTwo: {
    width: "60%",
    marginBottom: "6em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  portNav: {
    marginBottom: "120em",
  },
  portimgCOntainer: {},
  portlogo: {
    marginRight: "3em",
  },
  portlinksContainer: {
    width: "80%",
  },
  portlinks: {
    fontFamily: "Spartan, sans-serif",
    fontWeight: 600,
    fontSize: "0.75em",
    "&:hover": {
      color: "#7D828F",
    },
  },
  portlineContainer: {
    width: "100%",
    marginRight: "3em",
  },
  portlineHome: {
    lineHeight: 1,
    marginBottom: "2em",
    opacity: "40%",
  },
  portletters: {
    opacity: "30%",
    fontWeight: 700,
    fontFamily: "Spartan, sans-serif",
    marginBottom: "0.55em",
  },
  portcontainerOne: {
    width: "8%",
  },
  portcontainerTwo: {
    width: "60%",
    marginBottom: "14em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const navLinks = [
  { id: 1, label: "Home", link: "/", values: "/" },
  { id: 2, label: "Portfolio", link: "/portfolio", values: "/portfolio" },
  { id: 3, label: "About Us", link: "/aboutus", values: "/aboutus" },
  { id: 4, label: "Contact", link: "contact", values: "contact" },
];

const Navigation = () => {
  const classes = useStyles();
  const useLocationPath = useLocation().pathname;
  const routes = ["/", "/portfolio", "/aboutus", "/contact"];
  const [value, setValue] = useState(0);
  // const [open, setOpen] = useState(false);
  const [switchNav, setSwitch] = useState(false)
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleValue = (e, newValue) => {
    setValue(newValue);
  };

  const navSwitch = () => {
    setSwitch(true)
  }

  const navSwitchBack = () => {
    setSwitch(false)
  }

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/portfolio":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/aboutus":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/contact":
        if (value !== 3) {
          setValue(3);
        }
        break;

      default:
        break;
    }
  }, [value]);

  // const menuOpen = () => {
  //   setOpen(true);
  // };

  // const menuClose = () => {
  //   setOpen(false)
  // }

  const deskTopNav = (
    <React.Fragment>
      <Grid
        className={classes.linksContainer}
        item
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Tabs
          TabIndicatorProps={{
            style: {
              width: "12%",
              marginLeft: "3em",
              color: "#60636D",
            },
          }}
          value={value}
          onChange={handleValue}
          style={{ width: "100%" }}
        >
          {navLinks.map((link) => (
            <Tab
              className={classes.links}
              key={link.id}
              component={Link}
              label={link.label}
              to={link.link}
            />
          ))}
        </Tabs>
      </Grid>
    </React.Fragment>
  );

  const mobileNav = (
    <React.Fragment>
      <AppBar style={{background:'white'}}>
        <Toolbar>
        <Grid
            item
            container
            direction="row"
            justify="space-between"
            style={{width:'100%', padding:'1%'}}
          >
            <Grid item className={classes.imgCOntainer} style={{margin:0, padding:0, marginTop:'0.45em'}}>
              <img style={{margin:0, width:'5em'}} className={classes.logo} alt="logo of Arch" src={Logo} />
            </Grid>
            

              <Grid item>
                {switchNav ? (
                    <Grid container direction='column'>
                      <Grid item>
                      <Button onClick={navSwitchBack} >X</Button>
                      </Grid>

                      <Grid item container direction='column' style={{ position:'absolute', top:'100%', left:'30%', width:'70%',  background:'white'}}>
                        
                          <Grid item component={Link} to='/' style={{color:'black',  textDecoration:'none'}} onClick={navSwitchBack}><Button style={{width:'100%', borderRadius:0}}>Home</Button></Grid>
                          <Grid item component={Link} to='/portfolio' style={{color:'black',  textDecoration:'none'}} onClick={navSwitchBack}><Button style={{width:'100%', borderRadius:0}}>Portfolio</Button></Grid>
                          <Grid item component={Link} to='/aboutus' style={{color:'black',  textDecoration:'none'}} onClick={navSwitchBack}><Button style={{width:'100%', borderRadius:0}}>About Us</Button></Grid>
                          <Grid item component={Link} to='/contact' style={{color:'black',  textDecoration:'none'}} onClick={navSwitchBack}><Button style={{width:'100%', borderRadius:0}}>Contact</Button></Grid>
                     
                      </Grid>

                    </Grid>
                ) : (
                  <IconButton onClick={navSwitch}>
        <MenuIcon />
      </IconButton>
                )}
              
              </Grid>
           
          </Grid>
          
        </Toolbar>
      </AppBar>
     
    </React.Fragment>
  );

  return (
    <div>
      {console.log(
        useLocationPath === routes[1]
          ? useLocationPath === routes[2]
          : useLocationPath === routes[3]
          ? useLocationPath === routes[2]
          : useLocationPath === routes[1]
      )}
      {useLocationPath === routes[1] ? (
        <Grid
          className={classes.portNav}
          container
          direction="row"
          alignItems="center"
        >
          <Grid container item className={classes.portcontainerOne}>
            <Hidden mdDown>
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                className={classes.portlineContainer}
              >
                <Grid item className={classes.portlineHome}>
                  |
                  <br /> |
                  <br /> |
                  <br /> |
                  <br /> |
                </Grid>

                <Grid item className={classes.portletters}>
                  P
                </Grid>

                <Grid item className={classes.portletters}>
                  O
                </Grid>

                <Grid item className={classes.portletters}>
                  R
                </Grid>

                <Grid item className={classes.portletters}>
                  T
                </Grid>

                <Grid item className={classes.portletters}>
                  F
                </Grid>

                <Grid item className={classes.portletters}>
                  O
                </Grid>

                <Grid item className={classes.portletters}>
                  L
                </Grid>

                <Grid item className={classes.portletters}>
                  I
                </Grid>

                <Grid item className={classes.portletters}>
                  O
                </Grid>
              </Grid>
            </Hidden>
          </Grid>

          <Grid direction={matchesSM ? "row" : null}
            justify={matchesSM ? "space-between" : null} item container className={classes.portcontainerTwo}>
            <Grid item className={classes.portimgCOntainer}>
              <img className={classes.portlogo} alt="logo of Arch" src={Logo} />
            </Grid>
            <Grid item>{matchesSM ? mobileNav : deskTopNav}</Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid
          className={classes.Nav}
          container
          direction="row"
          alignItems="center"
        >
          <Grid container item className={classes.containerOne}>
            <Hidden mdDown>
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                className={classes.lineContainer}
              >
                <Grid item className={classes.lineHome}>
                  |
                  <br /> |
                  <br /> |
                  <br /> |
                  <br /> |
                </Grid>

                <Grid item className={classes.letters}>
                  H
                </Grid>

                <Grid item className={classes.letters}>
                  O
                </Grid>

                <Grid item className={classes.letters}>
                  M
                </Grid>

                <Grid item className={classes.letters}>
                  E
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
          
          <Grid
            item
            container
            direction={matchesSM ? "row" : null}
            justify={matchesSM ? "space-between" : null}
            className={classes.containerTwo}
          >
            <Grid item className={classes.imgCOntainer}>
              <img className={classes.logo} alt="logo of Arch" src={Logo} />
            </Grid>
            

              <Grid item>{matchesSM ? mobileNav : deskTopNav}</Grid>
           
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Navigation;
