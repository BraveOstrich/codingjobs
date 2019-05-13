import React, { Component } from "react";
import NavbarPage from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import Footer from "../components/Footer";

class Home extends Component {
  state = {
    
  }

  render() {
    return (
      <div>
        <NavbarPage />
        <Jumbotron />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default Home;