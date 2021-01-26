import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'
import Logo from '../../assets/logo.svg'

const useStyles = makeStyles((theme) => ({
    Nav:{
        marginBottom:'30em'
    },
    imgCOntainer:{
    },
    logo:{
        marginRight:'3em',
    },
    linksContainer:{
        width:'60%',

    },
    links:{
        fontFamily: 'Spartan, sans-serif',
        fontWeight: 600,
        fontSize:'0.75em'
    },
    lineContainer:{
        width:'100%',
        marginRight:'3em'
        
    },
    lineHome:{
        lineHeight:1,
        marginBottom:'2em',
        opacity:'40%'

    },
    letters:{
        opacity:'30%',
        fontWeight:700,
        fontFamily: 'Spartan, sans-serif',
        marginBottom:'0.55em'

    },
    containerOne:{
        width:'8%',

    },
    containerTwo:{
        width:'60%',
        marginBottom:'6em'
    }
}))


const Navigation = () => {

    const classes = useStyles()
    return(
        <Grid className={classes.Nav} container direction='row' alignItems='center'>

        <Grid container item className={classes.containerOne}>
            <Grid item container direction='column' alignItems='center'  className={classes.lineContainer}>
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
            </Grid>


            <Grid item container className={classes.containerTwo}>
            <Grid item className={classes.imgCOntainer}>
                <img className={classes.logo} alt='logo of Arch' src={Logo} />
            </Grid>

            <Grid className={classes.linksContainer} item container direction='row' justify='space-evenly' alignItems='center'>
                <Grid item className={classes.links}>Portfolio</Grid>
                <Grid item className={classes.links}>About Us</Grid>
                <Grid item className={classes.links}> Contact</Grid>

            </Grid>
            </Grid>
            
        </Grid>
    )
}


export default Navigation