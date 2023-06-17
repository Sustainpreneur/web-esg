import axios from "axios";
import { Component } from "react";

class companyAPI extends Component {

  static mockAllCompany = async () => {
    try {
      const response = [
        {
          symbol: '24CS',
          company_name_en: 'Twenty-Four Con & Supply Public Company Limited',
          company_name_th: 'บริษัท ทเวนตี้ โฟร์ คอน แอนด์ ซัพพลาย จำกัด (มหาชน)',
          cg_score: '-',
          agm_leve: '-',
          thai_cac: 'ไม่มีข้อมูล',
          industry_group: 'อสังหาริมทรัพย์และก่อสร้าง (.PROPCON)',
          company_information_th: 'จำหน่ายอุปกรณ์ระบบปรับอากาศและรับเหมาติดตั้งระบบวิศวกรรมประกอบอาคาร',
          company_information_en: 'Distribution of HVAC system (Heating Ventilation and Air Conditioning System) and Mechanical Engineering service contractor',
          market: 'mai',
          sector: 'PROPCON',
          location: 'Address 89 AIA Capital Center, 9th Floor, Unit 901 Ratchadaphisek Road, Din Daeng, Din Daeng Bangkok 10400',
          telephone: 'Telephone 0-2248-1948',
          website: 'http://www.24con-supply.com',
          fax: 'Fax 0-2248-1949',
          setthsi: true,
          setthsi_index: false,
          set50: false,
          set100: false,
          yahoo_finance: true
        },
        {
          symbol: 'PTT',
          company_name_en: 'Twenty-Four Con & Supply Public Company Limited',
          company_name_th: 'บริษัท ทเวนตี้ โฟร์ คอน แอนด์ ซัพพลาย จำกัด (มหาชน)',
          cg_score: '-',
          agm_leve: '-',
          thai_cac: 'ไม่มีข้อมูล',
          industry_group: 'อสังหาริมทรัพย์และก่อสร้าง (.PROPCON)',
          company_information_th: 'จำหน่ายอุปกรณ์ระบบปรับอากาศและรับเหมาติดตั้งระบบวิศวกรรมประกอบอาคาร',
          company_information_en: 'Distribution of HVAC system (Heating Ventilation and Air Conditioning System) and Mechanical Engineering service contractor',
          market: 'SET',
          sector: 'PROPCON',
          location: 'Address 89 AIA Capital Center, 9th Floor, Unit 901 Ratchadaphisek Road, Din Daeng, Din Daeng Bangkok 10400',
          telephone: 'Telephone 0-2248-1948',
          website: 'http://www.24con-supply.com',
          fax: 'Fax 0-2248-1949',
          setthsi: true,
          setthsi_index: true,
          set50: true,
          set100: true,
          yahoo_finance: true
        },
        {
          symbol: 'AAV',
          company_name_en: 'Twenty-Four Con & Supply Public Company Limited',
          company_name_th: 'บริษัท ทเวนตี้ โฟร์ คอน แอนด์ ซัพพลาย จำกัด (มหาชน)',
          cg_score: '-',
          agm_leve: '-',
          thai_cac: 'ไม่มีข้อมูล',
          industry_group: 'อสังหาริมทรัพย์และก่อสร้าง (.PROPCON)',
          company_information_th: 'จำหน่ายอุปกรณ์ระบบปรับอากาศและรับเหมาติดตั้งระบบวิศวกรรมประกอบอาคาร',
          company_information_en: 'Distribution of HVAC system (Heating Ventilation and Air Conditioning System) and Mechanical Engineering service contractor',
          market: 'SET',
          sector: 'PROPCON',
          location: 'Address 89 AIA Capital Center, 9th Floor, Unit 901 Ratchadaphisek Road, Din Daeng, Din Daeng Bangkok 10400',
          telephone: 'Telephone 0-2248-1948',
          website: 'http://www.24con-supply.com',
          fax: 'Fax 0-2248-1949',
          setthsi: true,
          setthsi_index: true,
          set50: false,
          set100: true,
          yahoo_finance: true
        },
        {
          symbol: 'A',
          company_name_en: 'Twenty-Four Con & Supply Public Company Limited',
          company_name_th: 'บริษัท ทเวนตี้ โฟร์ คอน แอนด์ ซัพพลาย จำกัด (มหาชน)',
          cg_score: '-',
          agm_leve: '-',
          thai_cac: 'ไม่มีข้อมูล',
          industry_group: 'อสังหาริมทรัพย์และก่อสร้าง (.PROPCON)',
          company_information_th: 'จำหน่ายอุปกรณ์ระบบปรับอากาศและรับเหมาติดตั้งระบบวิศวกรรมประกอบอาคาร',
          company_information_en: 'Distribution of HVAC system (Heating Ventilation and Air Conditioning System) and Mechanical Engineering service contractor',
          market: 'SET',
          sector: 'PROPCON',
          location: 'Address 89 AIA Capital Center, 9th Floor, Unit 901 Ratchadaphisek Road, Din Daeng, Din Daeng Bangkok 10400',
          telephone: 'Telephone 0-2248-1948',
          website: 'http://www.24con-supply.com',
          fax: 'Fax 0-2248-1949',
          setthsi: true,
          setthsi_index: true,
          set50: false,
          set100: false,
          yahoo_finance: true
        },
      ]
      return response;
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  }

  //ข้อมูลบริษัททั้งหมด
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
