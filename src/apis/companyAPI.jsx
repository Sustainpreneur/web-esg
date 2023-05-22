import axios from "axios";
import React, { Component } from "react";

class companyAPI extends Component {

  static getAllCompany = async () => {
    try {
      const response = await axios.get("http://54.169.193.60:4000/esg/allcompany")
      return response.data;
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  static getEnergyCompany = async () => {
    try {
      const response = await axios.get("http://54.169.193.60:4000/esg/energycompany")
      return response.data;
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  static getBankingCompany = async () => {
    try {
      const response = await axios.get("http://54.169.193.60:4000/esg/bankingcompany")
      return response.data;
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  static getSearch = async () => {
    try {
      const response = await axios.get("http://54.169.193.60:4000/project/search")
      // const response = await axios({
      //   url: "http://54.169.193.60:4000/project/search",
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
