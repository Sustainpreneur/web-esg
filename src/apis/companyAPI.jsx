import axios from "axios";
import React, { Component } from "react";

class companyAPI extends Component {

  static getAllCompany = async () => {
    try {
      const response = await axios.get("/esg/allcompany")
      return response.data;
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  static getEnergyCompany = async () => {
    try {
      const response = await axios.get("/esg/energycompany")
      return response.data;
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  static getBankingCompany = async () => {
    try {
      const response = await axios.get("/esg/bankingcompany")
      return response.data;
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  static getSearch = async () => {
    try {
      const response = await axios.get("/project/search")
      // const response = await axios({
      //   url: "http://13.213.120.182:8080/project/search",
      //   method: "GET",
      // });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

}
export default companyAPI;
