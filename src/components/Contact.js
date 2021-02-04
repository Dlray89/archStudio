import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  TextField,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery,
  Hidden
} from "@material-ui/core";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet'
import heroImg from "../assets/contact/desktop/image-hero.jpg";
// import mapImg from "../assets/contact/desktop/image-map.png";
import Logo from "../assets/logoWhite.svg";



const useStyles = makeStyles((theme) => ({
  contact: {
    marginTop: "-35em",
    width: "80%",
    marginLeft: "7em",
    [theme.breakpoints.down('sm')]:{
        margin:0,
        marginTop:'-36em',
        width:'100%'
    }
  },
  heroCard: {
    width: "41em",
    [theme.breakpoints.down('sm')]:{
        
        margin:0
    }
  },
  heroImg: {
    width: "100%",
  },
  heroTitle: {
    fontSize: "10em",
    marginLeft: "2em",
    color: "#eeeff4",
    marginTop: "-6em",
    fontFamily: "Spartan, sans-serif",
    fontWeight: 600,
    zIndex: 1,
  },
  tellMeMoreContainer: {
    width: "60%",
    marginTop: "-44%",
    background: "white",
    marginLeft: "28em",
    [theme.breakpoints.down('sm')]:{
        
        margin:0,
        width:'90%',
        marginTop:'-17em'
    }
  },
  tellMeMoreTitle: {
    marginTop: "3em",
    fontSize: "3.2em",
    width: "60%",
    margin: " 0 auto",
    [theme.breakpoints.down('sm')]:{
        
        margin:'0.45em auto',
        fontSize:'2.2em',
        width:'65%',
        
    }
  },
  tellMeMoreSubtitle: {
    width: "60%",
    margin: " 0 auto",
    marginTop: "1em",
    [theme.breakpoints.down('sm')]:{
        
        margin:'0 auto',
        width:'65%'
    }
  },
  contactDetailsContainer: {
    marginTop: "5em",
    [theme.breakpoints.down('sm')]:{
        
        margin:0,
        marginTop:'3em'
    }
  },
  contactDetailsTitle: {
    fontSize: "2.3em",
    width: "18%",
    marginRight: "auto",
    [theme.breakpoints.down('sm')]:{
        
        margin:0,
        width:'50%',
        textAlign:'center',
        fontSize:'2.2em',
    }
  },
  mainOfficeContainer: {
    width: "40%",
    textAlign: "center",
    [theme.breakpoints.down('sm')]:{
        
        margin:0,
        width:'50%'
    }
  },
  mainOfficetitle: {
    fontWeight: 500,
    marginBottom: "1em",
    [theme.breakpoints.down('sm')]:{
        
        margin:0,
        fontSize:'1.1em',
        marginBottom:'0.95em',
        marginTop:'0.95em'
    }
  },
  officeTwoContainer: {
    width: "40%",
    textAlign: "center",
    [theme.breakpoints.down('sm')]:{
        
        margin:0,
        width:'50%'
    }
  },
  officeTwoTitlle: {
    fontWeight: 500,
    marginBottom: "1em",
    [theme.breakpoints.down('sm')]:{
        
        margin:0,
        fontSize:'1.1em',
        marginBottom:'0.95em',
        marginTop:'0.95em'
    }
  },
  contactInfo: {
    marginBottom: "0.36em",
    [theme.breakpoints.down('sm')]:{
        
        margin:0,
        marginBottom:'0.65em',
        fontSize:'0.75em'
    }
  },
  viewMapContainer: {
    width: "100%",
    marginBottom: "1em",
    marginTop: "1em",
    [theme.breakpoints.down('sm')]:{
        
        margin:0
    }
  },
  viewMapButton: {
    background: "black",
    color: "white",
    width: "45%",
    [theme.breakpoints.down('sm')]:{
        
        margin:0,
        width:'100%'
    }
  },
  map: {
    marginTop: "3em",
    width:'100%',
    height:'35em',
    [theme.breakpoints.down('sm')]:{
        height:'30em',
        margin:0,
        marginTop:'3em'
    }
  },
  mapImgContainer: {},
  mapImg: {
    width: "100%",
  },
  connectWithUsContainer: {
    marginTop: "5em",
    [theme.breakpoints.down('sm')]:{
        
        margin:0,
        marginTop:'1em'
    }
  },
  connectWithUsTitle: {
    fontSize: "3em",
    width: "20%",
    [theme.breakpoints.down('sm')]:{
        
        margin:0,
        width:'40%',
        marginBottom:'1em',
        textAlign:'center',
        fontSize:'2.2em',
        marginTop:'1em'
    }
  },
  textFields: {
    width: "70%",
  },
  TextFieldContainer: {},
  inputfields: {
    width: "100%",
    marginBottom: "1em",
  },
  formButtonContainer:{
  },
  buttonInputContainer:{
    width:'30%'

  },
  formButton:{
    width:'100%'

  },
  Footer: {
    background: "#EEEFF4",
    width: "92%",
    marginLeft: "0em",
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      marginTop: "6em",
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
      position: "inherit",
      marginTop: "-3em",
      height: "8em",
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
    left: "74%",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      textAlign: "center",
      marginTop: "1em",
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
}));

const mainOffice = [35.952461, -83.991531]
const officeII = [29.897430, -97.827510]

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState(null)
  const [officePosition, setOfficePosition] = useState(false)

  const mainOfficeLatLng = () => {
    setOfficePosition(false)
    setPosition(mainOffice)
  }

  const officetwo = () => {
    setOfficePosition(true)
    setPosition(officeII)
  }
  
  
  const LocationMarkey = () => {
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(mainOffice)
        map.flyTo(mainOffice, map.getZoom())
      },
    })

    return position === null ? null : (

      <Marker position={position }>
      <Popup>You are here</Popup>
    </Marker>
    )
  }

  

  

  const onValidation = (e) => {
    let valid;

    switch (e.target.id) {
      case "email":
        setEmail(e.target.valid);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper("Please enter an valid email");
        } else {
          setEmailHelper("");
        }
        break;
      default:
        break;
    }
  };

  const cancelForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Grid container className={classes.contact}>
      <Grid item container direction="row" alignItems="center">
        <Grid item className={classes.heroCard}>
          <img className={classes.heroImg} alt="anology phone" src={heroImg} />
        </Grid>
    <Hidden mdDown>
        <Grid item className={classes.heroTitle}>
          Contact
        </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        direction="column"
        className={classes.tellMeMoreContainer}
      >
        <Grid item className={classes.tellMeMoreTitle}>
          Tell us about your project
        </Grid>

        <Grid item className={classes.tellMeMoreSubtitle}>
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? "column":"row"}
        alignItems="center"
        className={classes.contactDetailsContainer}
      >
        <Grid item className={classes.contactDetailsTitle}>
          Contact Details
        </Grid>

        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className={classes.mainOfficeContainer}
        >
          <Grid item className={classes.mainOfficetitle}>
            Main Office
          </Grid>
          <Grid item className={classes.contactInfo}>
            Mail: archone@mail.com
          </Grid>

          <Grid item className={classes.contactInfo}>
            Address: 1892 Chenoweth Drive TN
          </Grid>

          <Grid item className={classes.contactInfo}>
            Phone: 123-456-3451
          </Grid>
          <Grid item className={classes.viewMapContainer}>
            <Button onClick={mainOfficeLatLng} className={classes.viewMapButton} variant="contained">
              View on Map
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className={classes.officeTwoContainer}
        >
          <Grid item className={classes.officeTwoTitlle}>
            Office II
          </Grid>
          <Grid item className={classes.contactInfo}>
            Mail: archtwo@mail.com
          </Grid>

          <Grid item className={classes.contactInfo}>
            {" "}
            Address: 3399 Wines Lane TX
          </Grid>

          <Grid item className={classes.contactInfo}>
            {" "}
            Phone: 832-123-4321
          </Grid>
          <Grid item className={classes.viewMapContainer}>
            <Button onClick={officetwo} className={classes.viewMapButton} variant="contained">
              View on Map
            </Button>
          </Grid>
        </Grid>
      </Grid>

      

      <Grid item container className={classes.map}>
        <MapContainer
        center={mainOffice}
        zoom={13}
        scrollWheelZoom={false}
        style={{width:'100%', border:'solid 2px red'}}
        
        >
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'  />
           {officePosition ?
           <Marker position={officeII}>
           second Office
         </Marker> :
         <Marker position={mainOffice}>
         Main Office
       </Marker>
           
          }
           
             <LocationMarkey  />
        </MapContainer>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? "column":"row"}
        justify="space-between"
        alignItems="center"
        className={classes.connectWithUsContainer}
      >
        <Grid item className={classes.connectWithUsTitle}>
          Connect with us
        </Grid>

        <Grid item container direction="column" className={classes.textFields}>
          <Grid item className={classes.TextFieldContainer}>
            <TextField
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.inputfields}
              placeholder="Name"
            />
          </Grid>

          <Grid item className={classes.TextFieldContainer}>
            <TextField
              id="email"
              error={emailHelper.length !== 0}
              helperText={emailHelper}
              value={email}
              onChange={onValidation}
              className={classes.inputfields}
              placeholder="Email"
            />
          </Grid>

          <Grid item className={classes.TextFieldContainer}>
            <TextField
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={classes.inputfields}
              placeholder="Message"
            />
          </Grid>

          <Grid item container direction='row' justify='space-between' alignItems='center' className={classes.formButtonContainer}>
            <Grid item className={classes.buttonInputContainer}>
              <Button
                className={classes.formButton}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
              >
                Send
              </Button>
            </Grid>

            <Grid item className={classes.buttonInputContainer}>
              <Button
                className={classes.formButton}
                variant="contained"
                onClick={cancelForm}
              >
                Cancel
              </Button>
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
          <Grid item className={classes.links} component={Link} to="/">
            Home
          </Grid>
          <Grid item className={classes.links} component={Link} to="/portfolio">
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

export default Contact;
