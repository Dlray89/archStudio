import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles, Grid, Button, useMediaQuery, useTheme} from '@material-ui/core'
import Logo from '../assets/logo.svg'

import bTowers from '../assets/portfolio/desktop/image-228b.jpg'
import delSol from '../assets/portfolio/desktop/image-del-sol.jpg'
import edelweiss from '../assets/portfolio/desktop/image-edelweiss.jpg'
import eeBox from '../assets/portfolio/desktop/image-eebox.jpg'
import federalimg from '../assets/portfolio/desktop/image-federal.jpg'
import hypers from '../assets/portfolio/desktop/image-hypers.jpg'
import netcry from '../assets/portfolio/desktop/image-netcry.jpg'
import paramour from '../assets/portfolio/desktop/image-paramour.jpg'
import prototype from '../assets/portfolio/desktop/image-prototype.jpg'
import seraph from '../assets/portfolio/desktop/image-seraph.jpg'
import sxiv from '../assets/portfolio/desktop/image-sxiv.jpg'
import trinity from '../assets/portfolio/desktop/image-trinity.jpg'

const useStyles = makeStyles((theme) => ({
    portfolio:{
        position:'absolute',
        top:'25%',
        left:'8%',
        width:'75%',
        [theme.breakpoints.down('sm')]:{
            
            width:'99%',
            left:0,
            top:'10%'
            
        }
    },
    mainGridContainer:{

    },
    containerOne:{
        marginBottom:'3em',
        [theme.breakpoints.down('sm')]:{
            margin:0
        }
    },
    containerTwo:{
        marginBottom:'3em',
        [theme.breakpoints.down('sm')]:{
            margin:0
        }
    },
    containerThree:{
        marginBottom:'3em',
        [theme.breakpoints.down('sm')]:{
            margin:0
        }
    },
    containerFour:{
        marginBottom:'3em',
        [theme.breakpoints.down('sm')]:{
            margin:0
        }
    },
    seraph:{
        backgroundImage:'url(' + seraph + ')',
        backgroundRepeat:'no-repeat',
        marginRight:'3.5em',
        width:'30%',
        height:'30em',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]:{
            
            margin:0,
            width:'80%',
            marginBottom:'2em'
        }

    },
    eeBox:{
        backgroundImage:'url(' + eeBox + ')',
        backgroundRepeat:'no-repeat',
        marginRight:'auto',
        width:'30%',
        height:'30em',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]:{
            
            margin:0,
            width:'80%',
            marginBottom:'2em'
        }

    },
    federal:{
        backgroundImage:'url(' + federalimg + ')',
        backgroundRepeat:'no-repeat',
        width:'30%',
        height:'30em',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]:{
            
            margin:0,
            width:'80%',
            marginBottom:'2em'
        }

    },
    delSol:{
        backgroundImage:'url(' + delSol + ')',
        backgroundRepeat:'no-repeat',
        marginRight:'3.5em',
        width:'30%',
        height:'30em',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]:{
            
            margin:0,
            width:'80%',
            marginBottom:'2em'
        }

    },
    prototype:{
        backgroundImage:'url(' + prototype + ')',
        backgroundRepeat:'no-repeat',
        marginRight:'auto',
        width:'30%',
        height:'30em',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]:{
            
            margin:0,
            width:'80%',
            marginBottom:'2em'
        }

    },
    bTower:{
        backgroundImage:'url(' + bTowers + ')',
        backgroundRepeat:'no-repeat',
        
        width:'30%',
        height:'30em',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]:{
            
            margin:0,
            width:'80%',
            marginBottom:'2em'
        }

    },
    edelweiss:{
        backgroundImage:'url(' + edelweiss + ')',
        backgroundRepeat:'no-repeat',
        marginRight:'3.5em',
        width:'30%',
        height:'30em',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]:{
            
            margin:0,
            width:'80%',
            marginBottom:'2em'
        }

    },
    netcry:{
        backgroundImage:'url(' + netcry + ')',
        backgroundRepeat:'no-repeat',
        marginRight:'auto',
        width:'30%',
        height:'30em',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]:{
            
            margin:0,
            width:'80%',
            marginBottom:'2em'
        }

    },
    hypers:{
        backgroundImage:'url(' + hypers + ')',
        backgroundRepeat:'no-repeat',
        
        width:'30%',
        height:'30em',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]:{
            
            margin:0,
            width:'80%',
            marginBottom:'2em'
        }

    },
    sxiv:{
        backgroundImage:'url(' + sxiv + ')',
        backgroundRepeat:'no-repeat',
        marginRight:'3.5em',
        width:'30%',
        height:'30em',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]:{
            
            margin:0,
            width:'80%',
            marginBottom:'2em'
        }

    },
    trinity:{
        backgroundImage:'url(' + trinity + ')',
        backgroundRepeat:'no-repeat',
        marginRight:'auto',
        width:'30%',
        height:'30em',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]:{
            
            margin:0,
            width:'80%',
            marginBottom:'2em'
        }

    },
    paramour:{
        backgroundImage:'url(' + paramour + ')',
        backgroundRepeat:'no-repeat',
        
        width:'30%',
        height:'30em',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]:{
            
            margin:0,
            width:'80%',
            marginBottom:'2em'
        }

    },
    portfolioTitle:{
        color:'white',
        marginTop:'19em',
        
        width:'80%',
        textAlign:'left',
        marginLeft:'1.35em',
        fontSize:'1.3em',
        fontWeight:'500',
    },
    portfolioDate:{
        color:'white',
        
        width:'80%',
        textAlign:'left',
        marginLeft:'1.7em'


    },
    Footer:{
        background:'#EEEFF4',
        width:'62%',
        marginLeft:'7em',
        marginTop:'5em',
        [theme.breakpoints.down('sm')]:{
          margin:0,
          width:'100%',
          marginTop:'6em'
        }
    },
    logoMainContainer:{
        background:'black',
        width:'15%',
        boxSizing:'border-box',
        height:'12em',
        [theme.breakpoints.down('sm')]:{
          margin:0,
          width:'30%',
          position:'absolute',
          top:'385em',
          height:'8em'
        }
    
    },
    logoContainer:{
    },
    logo:{
        marginTop:'4em',
        [theme.breakpoints.down('sm')]:{
          width:'5em',
          marginTop:'2.7em'
        }
        
       
    
    },
    linksCOntainer:{
        width:'60%',
        marginLeft:'3em',
        marginTop:'2em',
        [theme.breakpoints.down('sm')]:{
          margin:0,
          width:'100%',
          marginTop:'5em',
          marginBottom:'5em'
        }
    },
    links:{
        margin: 0,
        height: '3em',
        marginRight:'2em',
        width:'20%',
        fontFamily: 'Spartan, sans-serif',
        fontWeight: 700,
        fontSize:'0.75em',
        [theme.breakpoints.down('sm')]:{
          margin:0,
          width:'100%',
          textAlign:'center'
        }
    
    },
    buttonMainContainer:{
        width:'20%',
        position:'absolute',
        left:'63%',
        [theme.breakpoints.down('sm')]:{
          margin:0,
          width:'100%',
          textAlign:'center',
          marginTop:'3em',
          left:0
        }
    
    },
    buttonContainer:{
        width:'100%',
        [theme.breakpoints.down('sm')]:{
          marginBottom:'1em',
          
        }
    
    },
    button:{
        color:'white',
        background:'black',
        fontFamily: 'Spartan, sans-serif',
    
    },
    
    mobileStepper:{
      marginTop: "4.8em",
      background: "#EEEFF4",
      [theme.breakpoints.down('sm')]:{
        margin:0
      }
    }
}))



const Portfolio = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

    // const navLinks = [
    //     { id: 1, label: "Home", link: "/",},
    //     { id: 1, label: "Portfolio", link: "/portfolio",},
    //     { id: 1, label: "About Us", link: "/aboutus" },
    //     { id: 1, label: "Contact", link: "contact" },
    //   ];
    return(
        <div className={classes.portfolio}>
           
            <Grid container direction='column' alignItems='center'>
                <Grid item container direction={matchesSM ? 'column':'row'}  alignItems='center' className={classes.containerOne}>
                    <Grid item container direction='column' className={classes.seraph} component={Link}>
                        <div style={{background: "rgba(27, 20, 17, 0.3)", height:'100%', width:'100%'}}>
                       <Grid item className={classes.portfolioTitle}>
                           Seraph Station
                       </Grid>

                       <Grid item className={classes.portfolioDate}>
                           September 2019
                       </Grid>
                       </div>
                    </Grid>

                    <Grid component={Link} item container direction='column' className={classes.eeBox}>
                    <div style={{background: "rgba(27, 20, 17, 0.3)", height:'100%', width:'100%'}}>
                    <Grid item className={classes.portfolioTitle}>
                           Eebox Building
                       </Grid>

                       <Grid item className={classes.portfolioDate}>
                           August 2017
                       </Grid>
                       </div>
                    </Grid>

                    <Grid component={Link} item container direction='column' className={classes.federal}>
                    <div style={{background: "rgba(27, 20, 17, 0.3)", height:'100%', width:'100%'}}>
                    <Grid item className={classes.portfolioTitle}>
                          Federal II Tower
                       </Grid>

                       <Grid item className={classes.portfolioDate}>
                           March 2017
                       </Grid>
                       </div>
                    </Grid>
                </Grid>

                <Grid className={classes.containerTwo}  item container direction={matchesSM ? 'column':'row'} alignItems='center'>
                    <Grid component={Link} item container direction='column' className={classes.delSol}>
                        <div style={{background: "rgba(27, 20, 17, 0.3)", height:'100%', width:'100%'}}>
                       <Grid item className={classes.portfolioTitle}>
                           SProject Del Sol
                       </Grid>

                       <Grid item className={classes.portfolioDate}>
                           January 2016
                       </Grid>
                       </div>
                    </Grid>

                    <Grid component={Link} item container direction='column' className={classes.prototype}>
                    <div style={{background: "rgba(27, 20, 17, 0.3)", height:'100%', width:'100%'}}>
                    <Grid item className={classes.portfolioTitle}>
                           Le Prototype
                       </Grid>

                       <Grid item className={classes.portfolioDate}>
                           October 2015
                       </Grid>
                       </div>
                    </Grid>

                    <Grid component={Link} item container direction='column' className={classes.bTower}>
                    <div style={{background: "rgba(27, 20, 17, 0.3)", height:'100%', width:'100%'}}>
                    <Grid item className={classes.portfolioTitle}>
                          228B Tower
                       </Grid>

                       <Grid item className={classes.portfolioDate}>
                           April 2015
                       </Grid>
                       </div>
                    </Grid>
                </Grid>


                <Grid className={classes.containerThree}  item container direction={matchesSM ? 'column':'row'}alignItems='center'>
                    <Grid component={Link} item container direction='column' className={classes.edelweiss}>
                        <div style={{background: "rgba(27, 20, 17, 0.3)", height:'100%', width:'100%'}}>
                       <Grid item className={classes.portfolioTitle}>
                           Grand Edelweiss Hotel
                       </Grid>

                       <Grid item className={classes.portfolioDate}>
                           December 2013
                       </Grid>
                       </div>
                    </Grid>

                    <Grid component={Link} item container direction='column' className={classes.netcry}>
                    <div style={{background: "rgba(27, 20, 17, 0.3)", height:'100%', width:'100%'}}>
                    <Grid item className={classes.portfolioTitle}>
                           Netcry Towers
                       </Grid>

                       <Grid item className={classes.portfolioDate}>
                           August 2012
                       </Grid>
                       </div>
                    </Grid>

                    <Grid component={Link} item container direction='column' className={classes.hypers}>
                    <div style={{background: "rgba(27, 20, 17, 0.3)", height:'100%', width:'100%'}}>
                    <Grid item className={classes.portfolioTitle}>
                          Hypers
                       </Grid>

                       <Grid item className={classes.portfolioDate}>
                           January 2012
                       </Grid>
                       </div>
                    </Grid>
                </Grid>

                <Grid className={classes.containerFour}  item container direction={matchesSM ? 'column':'row'} alignItems='center'>
                    <Grid component={Link} item container direction='column' className={classes.sxiv}>
                        <div style={{background: "rgba(27, 20, 17, 0.3)", height:'100%', width:'100%'}}>
                       <Grid item className={classes.portfolioTitle}>
                           SXIV Tower
                       </Grid>

                       <Grid item className={classes.portfolioDate}>
                           March 2011
                       </Grid>
                       </div>
                    </Grid>

                    <Grid component={Link} item container direction='column' className={classes.trinity}>
                    <div style={{background: "rgba(27, 20, 17, 0.3)", height:'100%', width:'100%'}}>
                    <Grid item className={classes.portfolioTitle}>
                           Trinity Bank Tower
                       </Grid>

                       <Grid item className={classes.portfolioDate}>
                           September 2010
                       </Grid>
                       </div>
                    </Grid>

                    <Grid component={Link} item container direction='column' className={classes.paramour}>
                    <div style={{background: "rgba(27, 20, 17, 0.3)", height:'100%', width:'100%'}}>
                    <Grid item className={classes.portfolioTitle}>
                          Project Paramour
                       </Grid>

                       <Grid item className={classes.portfolioDate}>
                           February 2008
                       </Grid>
                       </div>
                    </Grid>
                </Grid>


            </Grid>

            <Grid container direction={ matchesSM ? 'column-reverse' : 'row'} alignItems='center' className={classes.Footer}>
            <Grid container item justify='center' className={classes.logoMainContainer}>
                <Grid item className={classes.logoContainer}>
                <img className={classes.logo} alt='arch logo in white' src={Logo} />

                </Grid>
               
            </Grid>

            <Grid container item direction={matchesSM ? 'column' : 'row'} alignItems='center'  className={classes.linksCOntainer}>
            <Grid item className={classes.links} component={Link} to='/' onClick={props.homeLink}>
                    Home
                </Grid>
                <Grid item className={classes.links} component={Link} to='/portfolio' onClick={props.portfolioLink}>
                    Portfolio
                </Grid>

                <Grid item className={classes.links}component={Link} to='/aboutus'>
                    About Us
                </Grid>

                <Grid item className={classes.links} component={Link} to='/contact'>
                    Contact
                </Grid>
            </Grid>

            <Grid container item className={classes.buttonMainContainer}>
                <Grid item className={classes.buttonContainer}>
                    <Button variant='contained' className={classes.button}>See our Portfolio</Button>
                </Grid>
            </Grid>


        </Grid>
        </div>
    )
}


export default Portfolio