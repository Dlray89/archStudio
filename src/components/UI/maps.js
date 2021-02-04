import React , { Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'




export class MapContainter extends Component {
    
    render(){

        const makeStyles = {
            width: '100%',
            height:'100%'
        }
        return(
            <div>
            <Map
            google={this.props.google}
            zoom={14}
            style={makeStyles}
            initialCenter={
                {
                    lat: -1.2884,
                    lng: 36.8233
                }
            }
              />
              </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBEb-pRMQ8YGxsxYqboN5UILK2BNw4hfww'
})