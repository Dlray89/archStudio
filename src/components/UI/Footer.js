import React from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core'
import Logo from '../../assets/logoWhite.svg'


const useStyles = makeStyles((theme) => ({
    Footer:{
        background:'#EEEFF4',
        width:'75%',
        marginLeft:'6.5em'
    },
    logoMainContainer:{
        background:'black',
        width:'15%',
        boxSizing:'border-box',
        height:'12em'

    },
    logoContainer:{
    },
    logo:{
        marginTop:'4em'
       

    },
    linksCOntainer:{
        width:'60%',
        marginLeft:'3em',
        marginTop:'2em'
    },
    links:{
        margin: 0,
        height: '3em',
        marginRight:'2em',
        width:'20%',
        fontFamily: 'Spartan, sans-serif',
        fontWeight: 500

    },
    buttonMainContainer:{
        width:'20%',
        position:'absolute',
        left:'71%'

    },
    buttonContainer:{
        width:'100%',

    },
    button:{
        color:'white',
        background:'black',
        fontFamily: 'Spartan, sans-serif',

    }
}))




const Footer = () => {
    const classes = useStyles()
    return(
        <Grid container direction='row' alignItems='center' className={classes.Footer}>
            <Grid container item justify='center' className={classes.logoMainContainer}>
                <Grid item className={classes.logoContainer}>
                <img className={classes.logo} alt='arch logo in white' src={Logo} />

                </Grid>
               
            </Grid>

            <Grid container item direction='row' alignItems='center'  className={classes.linksCOntainer}>
                <Grid item className={classes.links}>
                    Portfolio
                </Grid>

                <Grid item className={classes.links}>
                    About Us
                </Grid>

                <Grid item className={classes.links}>
                    Contact
                </Grid>
            </Grid>

            <Grid container item className={classes.buttonMainContainer}>
                <Grid item className={classes.buttonContainer}>
                    <Button variant='contained' className={classes.button}>See our Portfolio</Button>
                </Grid>
            </Grid>


        </Grid>
    )
}


export default Footer