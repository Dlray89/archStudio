import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Button,
  MobileStepper,
  useTheme,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import paramour from "../assets/home/desktop/image-hero-paramour.jpg";
import federal from "../assets/home/desktop/image-hero-federal.jpg";
import seraph from "../assets/home/desktop/image-hero-seraph.jpg";
import trinity from "../assets/home/desktop/image-hero-trinity.jpg";
import delSol from "../assets/portfolio/desktop/image-del-sol.jpg";
import BTower from "../assets/portfolio/desktop/image-228b.jpg";
import lePrototype from "../assets/portfolio/desktop/image-prototype.jpg";

import welcome from "../assets/home/desktop/image-welcome.jpg";
import smallTeam from "../assets/home/desktop/image-small-team.jpg";
// import SwipeableViews from  'react-swipeable-views'
// import {autoPlay} from 'react-swipeable-views-utils'

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// const AutoPlay = autoPlay(SwipeableViews)

//set heroCard objects
const heroCards = [
  {
    label: " Project Paramour",
    img: paramour,
    text:
      "  Project made for an art museum near Southwest London. Project Paramour isa statement of bold, modern architecture.",
  },
  {
    label: "Federal II Tower",
    img: federal,
    text:
      " A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
  },
  {
    label: "Seraph Station",
    img: seraph,
    text:
      " The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
  },
  {
    label: "Trinity Bank Tower",
    img: trinity,
    text:
      " Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
  },
];

const useStyles = makeStyles((theme) => ({
  homepage: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "65em",
    backgroundPositionY: "5%",
    width: "68%",
    position: "absolute",
    top: "15%",
    left: "8%",
    height: "30em",
  },
  headerTitle: {
    width: "35%",
    textAlign: "left",
    marginTop: "2em",
    color: "white",
    fontSize: "3.5em",
    fontWeight: 700,
    marginLeft: "3.4em",
    marginBottom: "0.15em",
  },
  headerSubtitle: {
    width: "30%",
    textAlign: "left",
    color: "white",
    marginLeft: "16em",
    fontSize: "0.75em",
    marginBottom: "0.85em",
  },
  headerButtonContainer: {
    width: "30%",
    textAlign: "left",
    marginLeft: "12em",
  },
  headerButton: {
    background: "black",
    color: "white",
    fontSize: "0.75em",
  },
  buttonGroupContainer: {
    width: "30%",
    textAlign: "left",
    position: "absolute",
    top: "92.5%",
    left: "-5%",
  },
  buttonGroup: {},
  buttonGroupButtons: {
    background: "#EEEFF4",
    color: "black",
    borderRadius: 0,
    "&:hover": {
      background: "#EEEFF4",
      color: "black",
    },
  },
  mainWelcome: {
    margin: "0 auto",
    width: "80%",
  },
  welcomeTitle: {
    fontSize: "9.5em",
    width: "60%",
    position: "absolute",
    top: "4.1em",
    left: "0.49em",
    color: "#EEEFF4",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 900,
  },
  welcomeToArchContainer: {
    width: "100%",
    margin: "0 auto",
  },
  archContainer: {
    width: "30%",
    marginTop: "0em",
    marginLeft: "6.5em",
    zIndex: 1,
  },
  archTitle: {
    textAlign: "left",
    fontSize: "2.8em",
    fontWeight: 500,
    width: "95%",
    margin: "0 auto",
    marginBottom: "1em",
    marginTop: "1.2em",
  },
  archSubtitle: {
    textAlign: "left",
    width: "95%",
    margin: "0 auto",
    fontSize: "0.85em",
    marginBottom: "2em",
  },
  imgContainer: {
    marginLeft: "7.5em",
  },
  img: {
    width: "100%",
  },
  smallTeam: {
    background: "url(" + smallTeam + ")",
    backgroundRepeat: "no-repeat",
    width: "68%",
    marginLeft: "7em",
    marginTop: "7em",
    height: '35em'
  },
  smallTeamTitle: {
    marginTop: "3.5em",
    color: "white",    
    fontSize: "3em",
    textAlign: "left",
    width: "40%",
    marginLeft: "4em",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 500,
  },
  smallTeamButtonContainer: {
    textAlign: "left",
    marginLeft: "12em",
    width: "45%",
    marginTop: "1em",
  },
  smallTeamButton: {
    background: "black",
    color: "white",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 500,
  },
  featureMainContainer: {
    width: "68%",
    marginLeft: "7em",
    marginTop: "6em",
    marginBottom: "5em",
  },
  featureContainer: {
    width: "100%",
    
  },
  featureDelSolContainer: {
    
    width: "30%",
    backgroundImage: "url(" + delSol + ")",
    backgroundRepeat: "no-repeat",
    height: "35em",
    marginRight: '2.92em'
  },
  featurebTowerImgContainer: {
    
    width: "30%",
    backgroundImage: "url(" + BTower + ")",
    backgroundRepeat: "no-repeat",
    marginRight: '2.9em'

  },
  featureImgLePrototypeContainer: {
    
    width: "30%",
    backgroundImage: "url(" + lePrototype + ")",
    backgroundRepeat: "no-repeat",
  },
  featuresTitle: {
    color: "white",
    marginTop: "20em",
    fontWeight: 600,
    
    textAlign: "left",
    marginLeft: "2em",
    fontFamily: "Spartan, sans-serif",
  },
  featuresLinks: {
    color: "white",
    
    textAlign: "left",
    marginLeft: "2.4em",
    fontFamily: "Spartan, sans-serif",
    fontSize: "0.85em",
  },
  numberOne: {
    color: "white",
    fontFamily: "Spartan, sans-serif",
    fontSize: "8em",
    fontWeight: 600,
    marginTop: "0.15em",
    opacity: "40%",
    marginLeft: "1.9em",
  },
  numberTwo: {
    color: "white",
    fontFamily: "Spartan, sans-serif",
    fontSize: "8em",
    fontWeight: 600,
    marginTop: "0.15em",
    opacity: "40%",
    marginLeft: "1.55em",
  },
  numberThree: {
    color: "white",
    fontFamily: "Spartan, sans-serif",
    fontSize: "8em",
    fontWeight: 600,
    marginTop: "0.15em",
    opacity: "40%",
    marginLeft: "1.6em",
  },
  featureHeader:{
    fontSize:'2.5em',
    fontFamily: "Spartan, sans-serif",
    fontWeight: 600,
    marginTop:'0.55em',
    marginBottom:'0.55em'
  },
  featureButtonContained:{

  },
   featureButton:{
      background:'black',
      color:'white'

  },
  portcards:{
  }
}));

const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  //create state of active step here
  const [activeButton, setActiveButton] = useState(0);
  //set the max of herocards in the object array by using .length
  const maxStep = heroCards.length;

  const handleNext = () => {
    setActiveButton((prevActive) => prevActive + 1);
  };

  const handleBack = () => {
    setActiveButton((prevActive) => prevActive - 1);
  };

  //   const handleStepChange = (steps) => {
  //       setActiveButton(steps)
  //   }

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        className={classes.homepage}
        style={{ backgroundImage: "url(" + heroCards[activeButton].img + ")" }}
      >
        <div
          style={{
            background: "rgba(27, 20, 17, 0.4)",
            height: "30em",
            width: "100%",
          }}
        >
          <Grid item className={classes.headerTitle}>
            {heroCards[activeButton].label}
          </Grid>

          <Grid item className={classes.headerSubtitle}>
            {heroCards[activeButton].text}
          </Grid>

          <Grid item className={classes.headerButtonContainer}>
            <Button variant="contained" className={classes.headerButton}>
              See Our Portfolio <ArrowRightAltIcon style={{ fill: "#FFF" }} />
            </Button>
          </Grid>

          <MobileStepper
            style={{ marginTop: "4.8em", background: "#EEEFF4" }}
            steps={maxStep}
            position="static"
            variant="dots"
            activeStep={activeButton}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeButton === maxStep - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeButton === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                back
              </Button>
            }
          />
        </div>
      </Grid>

      <Grid container className={classes.mainWelcome}>
        <Grid item className={classes.welcomeTitle}>
          Welcome
        </Grid>

        <Grid
          container
          direction="row"
          className={classes.welcomeToArchContainer}
        >
          <Grid
            item
            container
            direction="column"
            className={classes.archContainer}
          >
            <Grid item className={classes.archTitle}>
              Welcome to Arch Studio
            </Grid>

            <Grid item className={classes.archSubtitle}>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </Grid>
            <Grid item className={classes.archSubtitle}>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </Grid>

            <Grid item className={classes.archSubtitle}>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </Grid>
          </Grid>

          <Grid item className={classes.imgContainer}>
            <img alt="welcome pic" className={classes.img} src={welcome} />
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction="column" className={classes.smallTeam}>
        <div style={{ background: "rgba(27, 20, 17, 0.3)", height: "100%", width:'100%' }}>
          <Grid item className={classes.smallTeamTitle}>
            Small Team, Big ideas
          </Grid>

          <Grid item className={classes.smallTeamButtonContainer}>
            <Button variant="contained" className={classes.smallTeamButton}>
              About us <ArrowRightAltIcon />
            </Button>
          </Grid>
        </div>
      </Grid>

      <Grid
        className={classes.featureMainContainer}
        container
        direction="column"
        alignItems="center"
      >
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.featureContainer}
        >
          <Grid item className={classes.featureHeader}>Featured</Grid>

          <Grid item className={classes.featureButtonContained}>
            <Button variant="contained"  className={classes.featureButton}>
              See All <ArrowRightAltIcon />
            </Button>
          </Grid>
        </Grid>

        <Grid item container direction="row"  className={classes.portcards}>
          <Grid
            item
            container
            direction="column"
            className={classes.featureDelSolContainer}
          >
            <div
              style={{ background: "rgba(27, 20, 17, 0.3)", height: "100%", width:'100%' }}
            >
              <Grid item className={classes.numberOne}>
                1
              </Grid>
              <Grid item className={classes.featuresTitle}>
                Project Del Sol
              </Grid>
              <Grid item className={classes.featuresLinks}>
                View All Projects
              </Grid>
            </div>
          </Grid>

          <Grid
            item
            container
            direction="column"
            className={classes.featurebTowerImgContainer}
          >
            <div
              style={{ background: "rgba(27, 20, 17, 0.3)", height: "100%", width:'100%' }}
            >
              <Grid item className={classes.numberTwo}>
                2
              </Grid>
              <Grid item className={classes.featuresTitle}>
                228B Tower
              </Grid>
              <Grid item className={classes.featuresLinks}>
                View All Projects
              </Grid>
            </div>
          </Grid>

          <Grid
            item
            container
            direction="column"
            className={classes.featureImgLePrototypeContainer}
          >
            <div
              style={{ background: "rgba(27, 20, 17, 0.3)", height: "100%", width:'100%' }}
            >
              <Grid item className={classes.numberThree}>
                3
              </Grid>
              <Grid item className={classes.featuresTitle}>
                LePrototype
              </Grid>
              <Grid item className={classes.featuresLinks}>
                View All Projects
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
