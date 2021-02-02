import React from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logoWhite.svg'


const useStyles = makeStyles((theme) => ({
    Footer:{
        background:'#EEEFF4',
        width:'75%',
        marginLeft:'6.8em',
        marginTop:'110em'
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
        fontWeight: 700,
        fontSize:'0.75em'

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




const Footer = (props) => {
    const classes = useStyles()
    return(
       <div>
           
       </div>
    )
}


export default Footer