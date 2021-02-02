import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, makeStyles, Tabs, Tab, useTheme, useMediaQuery, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Hidden } from "@material-ui/core";
import Logo from "../../assets/logo.svg";

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  Nav: {
    marginBottom: "30em",
  },
  imgCOntainer: {},
  logo: {
    marginRight: "3em",
  },
  linksContainer: {
    width: "80%",
  },
  links: {
    fontFamily: "Spartan, sans-serif",
    fontWeight: 600,
    fontSize: "0.75em",
    '&:hover':{
      color:'#7D828F'
    }
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
    [theme.breakpoints.down('sm')]:{
      width:'100%'
    }
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
    '&:hover':{
      color:'#7D828F'
    }
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
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  const handleValue = (e, newValue) => {
    setValue(newValue)
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
        case '/contact':
        if(value !== 3){
          setValue(3)
        }
        break;

      default:
        break;
    }
  }, [value]);

  const menuOpen= () => {
      setOpen(true)
  }

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
            <Tabs TabIndicatorProps={{
              style: {
                width:'12%',
               marginLeft:'2.5em',
               color:'#60636D'
              }
            }}  value={value}
            onChange={handleValue} style={{ width: "100%" }}>
              {navLinks.map(link => (
                <Tab className={classes.links}  key={link.id} component={Link} label={link.label} to={link.link}    />
              ))}
            </Tabs>
          </Grid>
    </React.Fragment>
  )

  const mobileNav = (
    <React.Fragment>
      <SwipeableDrawer open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>

     
      <List>
        <ListItem button>
          <ListItemText>Home</ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemText>Porfolio</ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemText>About Us</ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemText>Contact</ListItemText>
        </ListItem>
      </List>
      </SwipeableDrawer>

      <IconButton onClick={menuOpen}>
        <MenuIcon  />
      </IconButton>
    </React.Fragment>
  )




  return (
    
    <div>
      {console.log(useLocationPath === routes[1] ? useLocationPath === routes[2] : useLocationPath === routes[3] ? useLocationPath === routes[2] : useLocationPath === routes[1] )}
      {useLocationPath === routes[1] ? 
      (
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

        <Grid item container className={classes.portcontainerTwo}>
          <Grid item className={classes.portimgCOntainer}>
            <img className={classes.portlogo} alt="logo of Arch" src={Logo} />
          </Grid>

        
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

        <Grid  item container direction={matchesSM ? 'row' : null} justify={matchesSM ? 'space-between' : null} className={classes.containerTwo}>
          <Grid item className={classes.imgCOntainer}>
            <img className={classes.logo} alt="logo of Arch" src={Logo} />
          </Grid>
          <Grid item>
            {matchesSM? mobileNav : deskTopNav}
          </Grid>

         
        </Grid>
      </Grid>
      )}
     
    </div>
  );
};

export default Navigation;
