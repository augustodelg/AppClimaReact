import React, { Component } from "react";
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from "./components/WeatherLocation/LocationList";
import ButtonAppBar from './components/NavBar/NavBar'
import ForecastExtended from "./components/WeatherLocation/ForecastExtend"
import { ThemeProvider } from '@material-ui/styles';
import theme from "./components/theme"
import "./App.css";

const cities = [
  "La Plata, AR",
  "Montevideo, UY",
  "Madrid, ES",
  "Las Flores, CO",
  "New York City, US",
];

class App extends Component {

  constructor(){
    super();
    this.state = {city :'Nueva cuidad'}
  }

  handleSelectionLocation = city => {
    this.setState({city })
    
  }
  render(){
    const {city} = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Grid className="App" fontFamily="Roboto" >
          <Row >
            <Col xs={12} ml={12}>
            <ButtonAppBar color="palette.warning"></ButtonAppBar>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} >
              <Row center="xs" >
                <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row center="xs" >
                <p className="z-depth-4">
                  <div className="detail"> 
                    <ForecastExtended city={city}></ForecastExtended>
                  </div>
                </p>
              </Row>
            </Col>
          </Row>
        </Grid>
      </ThemeProvider>
      
    
  )}
  
}

export default App;
