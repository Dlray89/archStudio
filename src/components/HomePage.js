import React from "react";
import { makeStyles, Grid, Button, ButtonGroup } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import paramour from "../assets/home/desktop/image-hero-paramour.jpg";
// import federal from '../assets/home/desktop/image-hero-federal.jpg'
import welcome from "../assets/home/desktop/image-welcome.jpg";
import smallTeam from '../assets/home/desktop/image-small-team.jpg'

// const heroCards = [
//     {img: paramour, text:'  Project made for an art museum near Southwest London. Project Paramour isa statement of bold, modern architecture.'},
//     {img: federal, text: ' A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.'} 
// ]


const useStyles = makeStyles((theme) => ({
  homepage: {
    backgroundImage: "url(" + paramour + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "60em",
    backgroundPositionY: "5%",
    width: "68%",
    position: "absolute",
    top: "20%",
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
    margin:'0 auto',
    width: "80%",
    
  },
  welcomeTitle: {
    fontSize: "9.5em",
    width: "60%",
    position:'absolute',
    top:'4.1em',
    left:'0.49em',
    color:'#EEEFF4',
    fontFamily: 'Spartan, sans-serif',
    fontWeight: 900

  },
  welcomeToArchContainer: {
    width: "100%",
    margin: '0 auto'
  },
  archContainer: {
    width: "30%",
    marginTop: "0em",
    marginLeft: "6.5em",
    zIndex:1
  },
  archTitle: {
    textAlign: "left",
    fontSize: "2.8em",
    fontWeight: 500,
    width: "95%",
    margin: "0 auto",
    marginBottom:'1em',
    marginTop:'1.2em'
  },
  archSubtitle: {
    textAlign: "left",
    width: "95%",
    margin: "0 auto",
    fontSize: "0.85em",
    marginBottom:'2em'
  },
  imgContainer: {
    marginLeft:'7.5em'
  },
  img: {
    width: "100%",
  },
  smallTeam:{
      background: 'url('+ smallTeam +')',
      backgroundRepeat:'no-repeat',
      width:'68%',
      marginLeft:'7em',
      padding:'8em',
      marginTop:'7em'
  },
  smallTeamTitle:{
      marginTop:'2em',
      color:'white',
      border:'solid 2px red',
      fontSize:'3em',
      textAlign:'left',
      width:'50%',
      marginLeft:'1.5em',
      fontFamily: 'Spartan, sans-serif',
      fontWeight: 500

  },
  smallTeamButtonContainer:{
      border:'solid 2px green',
      textAlign:'left',
      marginLeft:'4.2em',
      width:'45%',
      marginTop:'1em'


  },
  smallTeamButton:{
      background:'black',
      color:'white',
      fontFamily: 'Spartan, sans-serif',
      fontWeight:500

  }
  
}));

const HomePage = () => {
  const classes = useStyles();
//   const [activeButton, setActiveButton] = useState(0)
//   const maxStep = heroCards.length

//   const handleNext = () => {
//       setActiveButton((prevActive) => prevActive + 1)
//   }

 
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        className={classes.homepage}
      >
        <div style={{ background: "rgba(27, 20, 17, 0.4)", height: "30em" }}>
          <Grid item className={classes.headerTitle}>
            Project Paramour
          </Grid>

          <Grid item className={classes.headerSubtitle}>
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </Grid>

          <Grid item className={classes.headerButtonContainer}>
            <Button variant="contained" className={classes.headerButton}>
              See Our Portfolio <ArrowRightAltIcon style={{ fill: "#FFF" }} />
            </Button>
          </Grid>

          <Grid item className={classes.buttonGroupContainer}>
            <ButtonGroup className={classes.buttonGroup}>
              <Button
                variant="outlined"
                style={{ background: "black", color: "#fff" }}
                className={classes.buttonGroupButtons}
              >
                01
              </Button>
              <Button  variant="outlined" className={classes.buttonGroupButtons}>
                02
              </Button>
              <Button variant="outlined" className={classes.buttonGroupButtons}>
                03
              </Button>
              <Button variant="outlined" className={classes.buttonGroupButtons}>
                04
              </Button>
            </ButtonGroup>
          </Grid>
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
            <img alt='welcome pic' className={classes.img} src={welcome} />
          </Grid>
        </Grid>
      </Grid>

      < Grid container direction='column'  className={classes.smallTeam}>
      <div>
          <Grid item className={classes.smallTeamTitle}>
              Small Team, Big ideas
          </Grid>

          <Grid item className={classes.smallTeamButtonContainer}>
              <Button variant='contained' className={classes.smallTeamButton}>About us <ArrowRightAltIcon  /></Button>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default HomePage;
