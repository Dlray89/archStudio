import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  makeStyles,
  Button,
  Hidden,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import heroCard from "../assets/about/desktop/image-hero.jpg";
import heritage from "../assets/about/desktop/image-heritage.jpg";

import jake from "../assets/about/desktop/avatar-jake.jpg";
import thompson from "../assets/about/desktop/avatar-thompson.jpg";
import jacjson from "../assets/about/desktop/avatar-jackson.jpg";
import maria from "../assets/about/desktop/avatar-maria.jpg";
import Logo from "../assets/logoWhite.svg";

const useStyles = makeStyles((theme) => ({
  aboutUs: {
    position: "absolute",
    top: "20%",
    left: "8%",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      left: 0,
      width: "100%",
      top: "9%",
    },
  },
  firstContainer: {
    [theme.breakpoints.down("sm")]: {},
  },
  imgContainer: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },
  aboutusContainer: {},
  aboutusText: {
    fontSize: "9em",
    width: "80%",
    position: "absolute",
    top: "1em",
    left: "2.6em",
    color: "#EEEFF4",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 900,
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      border: "solid 2px blue",
    },
  },
  textContainer: {
    width: "62%",
    height: "27.2em",
    position: "absolute",
    background: "white",
    top: "15%",
    left: "38%",
    [theme.breakpoints.down("sm")]: {
      left: 0,
      width: "90%",
      height: "17em",
      position: "inherit",
      marginTop: "-7em",
    },
  },
  textTitle: {
    width: "60%",
    marginTop: "4em",
    fontSize: "3em",
    margin: "0 auto",
    textAlign: "left",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      fontSize: "2em",
      margin: 0,
      marginTop: "1em",
    },
  },
  textSubtitle: {
    width: "60%",
    marginTop: "1em",
    textAlign: "left",
    fontSize: "0.95em",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      fontSize: "1em",
      margin: 0,
      marginTop: "0.55em",
    },
  },
  secondContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "1em",
      margin: 0,
      marginTop: "18em",
    },
  },
  ourHeritage: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "101%",
      marginTop: "-13em",
      boxSizing: "border-box",
    },
  },
  ourHeritageTitle: {
    fontSize: "4em",
    width: "60%",
    textAlign: "left",
    marginBottom: "1em",
    marginTop: "1.2em",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "2em",
      margin: 0,
      marginTop: "0.55em",
      textAlign: "center",
    },
  },
  ourHeritageSubTitle: {
    width: "70%",
    marginBottom: "1em",
    fontSize: "0.95em",
    fontFamily: "Spartan, sans-serif",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      fontSize: "1em",
      margin: 0,
      marginTop: "1.2em",
      textAlign: "center",
      fontWeight: 500,
    },
  },
  ourHeritageImgContainer: {},
  ourHeritageImg: {
    width: "100%",
  },
  thridContainer: {
    width: "92.7%",
    marginLeft: "5em",
    marginTop: "8em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
      marginTop: "2em",
    },
  },
  firstSection: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
    },
  },
  theLeadersContainer: {
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
      marginBottom: "1em",
    },
  },
  theLeadersTitle: {
    fontSize: "3.6em",
    marginBottom: "5em",
    width: "25%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
      fontSize: "2em",
      textAlign: "center",
      marginBottom: "1em",
    },
  },
  mainLeaders: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: 0,
    },
  },

  theLeadersimg: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "99%",
    },
  },

  Footer: {
    background: "#EEEFF4",
    width: "85%",
    marginLeft: "5em",
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "101%",
      marginTop: "10em",
    },
  },
  logoMainContainer: {
    background: "black",
    width: "15%",
    boxSizing: "border-box",
    height: "12em",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "30%",
      height: "8em",
      position: "inherit",
      marginTop: "-3em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "165em",
    },
  },
  logoContainer: {},
  logo: {
    marginTop: "4em",
    [theme.breakpoints.down("sm")]: {
      width: "5em",
      marginTop: "2.7em",
    },
  },
  linksCOntainer: {
    width: "60%",
    marginLeft: "3em",
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      marginTop: "5em",
      marginBottom: "1em",
    },
  },
  links: {
    margin: 0,
    height: "3em",
    marginRight: "2em",
    width: "20%",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 700,
    fontSize: "0.75em",
    textDecoration: "none",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      textAlign: "center",
    },
  },
  buttonMainContainer: {
    width: "20%",
    position: "absolute",
    left: "81%",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      textAlign: "center",
      marginTop: "0em",
      left: 0,
      position: "static",
    },
  },
  buttonContainer: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
  },
  button: {
    color: "white",
    background: "black",
    fontFamily: "Spartan, sans-serif",
  },

  mobileStepper: {
    marginTop: "4.8em",
    background: "#EEEFF4",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
}));

const AboutUs = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column" className={classes.aboutUs}>
      <Grid item container direction="row" className={classes.firstContainer}>
        <Hidden mdDown>
          <Grid item className={classes.aboutusText}>
            About Us
          </Grid>
        </Hidden>
        <Grid item container className={classes.imgContainer}>
          <img
            className={classes.img}
            alt="hands typing on laptop"
            src={heroCard}
          />
        </Grid>

        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className={classes.textContainer}
        >
          <Grid item className={classes.textTitle}>
            Your team of professionals
          </Grid>
          <Grid item className={classes.textSubtitle}>
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.secondContainer}
      >
        <Grid
          item
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          className={classes.ourHeritage}
        >
          <Grid item className={classes.ourHeritageTitle}>
            {" "}
            Our Heritage
          </Grid>
          <Grid item className={classes.ourHeritageSubTitle}>
            {" "}
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </Grid>
          <Grid item className={classes.ourHeritageSubTitle}>
            {" "}
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.{" "}
          </Grid>
          <Grid item className={classes.ourHeritageSubTitle}>
            {" "}
            Our small team of world-class professionals provides input on every
            project.
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.ourHeritageImgContainer}>
            <img className={classes.ourHeritageImg} alt="" src={heritage} />
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justify="space-between"
        className={classes.thridContainer}
      >
        <Grid item className={classes.theLeadersTitle}>
          The Leaders
        </Grid>

        <Grid item className={classes.mainLeaders}>
          <Grid
            item
            direction="column"
            alignItems="center"
            container
            style={{ width: "100%" }}
          >
            <Grid
              style={{ marginBottom: "2em" }}
              className={classes.firstSection}
              item
              direction={matchesSM ? "column" : "row"}
              justify="flex-end"
              alignItems="center"
              container
            >
              <Grid
                style={{ marginRight: "1em" }}
                className={classes.theLeadersContainer}
                item
                direction="column"
                container
              >
                <Grid item className={classes.theLeadersImgContainer}>
                  <img
                    className={classes.theLeadersimg}
                    alt="avatar of richards"
                    src={jake}
                  />
                </Grid>
                <Grid item>Jake Richards</Grid>
                <Grid item>Chief Architect</Grid>
              </Grid>

              <Grid
                style={{ marginRight: matchesSM ? "1em" : null }}
                className={classes.theLeadersContainer}
                item
                direction="column"
                container
              >
                <Grid item className={classes.theLeadersImgContainer}>
                  <img
                    className={classes.theLeadersimg}
                    alt="avatar of richards"
                    src={thompson}
                  />
                </Grid>
                <Grid item>Thompson Smith</Grid>
                <Grid item>Head of Finance</Grid>
              </Grid>
            </Grid>

            <Grid
              className={classes.firstSection}
              item
              direction={matchesSM ? "column" : "row"}
              justify="flex-end"
              container
            >
              <Grid
                style={{ marginRight: "1em" }}
                className={classes.theLeadersContainer}
                item
                direction="column"
                container
              >
                <Grid item className={classes.theLeadersImgContainer}>
                  <img
                    className={classes.theLeadersimg}
                    alt="avatar of richards"
                    src={jacjson}
                  />
                </Grid>
                <Grid item>Jackson Rourke</Grid>
                <Grid item>Lead Designer</Grid>
              </Grid>

              <Grid
                className={classes.theLeadersContainer}
                item
                direction="column"
                container
              >
                <Grid item className={classes.theLeadersImgContainer}>
                  <img
                    className={classes.theLeadersimg}
                    alt="avatar of richards"
                    src={maria}
                  />
                </Grid>
                <Grid item>Maria Simpson</Grid>
                <Grid item>Senior Architect</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.Footer}
      >
        <Grid
          container
          item
          justify="center"
          className={classes.logoMainContainer}
        >
          <Grid item className={classes.logoContainer}>
            <img className={classes.logo} alt="arch logo in white" src={Logo} />
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
          className={classes.linksCOntainer}
        >
          <Grid
            item
            className={classes.links}
            component={Link}
            to="/"
            onClick={props.homeLink}
          >
            Home
          </Grid>
          <Grid
            item
            className={classes.links}
            component={Link}
            to="/portfolio"
            onClick={props.portfolioLink}
          >
            Portfolio
          </Grid>

          <Grid item className={classes.links} component={Link} to="/aboutus">
            About Us
          </Grid>

          <Grid item className={classes.links} component={Link} to="/contact">
            Contact
          </Grid>
        </Grid>

        <Grid container item className={classes.buttonMainContainer}>
          <Grid item className={classes.buttonContainer}>
            <Button variant="contained" className={classes.button}>
              See our Portfolio
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
