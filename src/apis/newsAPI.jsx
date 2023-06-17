import axios from "axios";
import { Component } from "react";

class newsAPI extends Component {
  // ขอแค่ 3 ข่าวล่าสุด
  static getThreeLatestNews = async () => {
    try {
      const response = await axios.get("/news/threelatest")
      return response.data;
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  }

  static mockThreeLatestNews = async () => {
    try {
      const response = [
        {
          title: 'Toyota to face governance challenge at shareholder meeting',
          category: 'Business',
          image: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/66WWALRRYRJCHBGZ34ZIDAGNOI.jpg',
          time: 'undefined ago'
        },
        {
          title: 'Exclusive: Investors may exit consumer goods firms over EU deforestation law',
          category: 'Sustainability',
          image: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/3FC45RDBIJJ4NKD6IIGQZL6XDY.jpg',
          time: 'undefined ago'
        },
        {
          title: 'BlackRock fund targets greening of materials sector',
          category: 'Sustainability',
          image: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/S45FY4HHVNPM3K23ESIVYSFLBY.jpg',
          time: '7:05 AM UTC'
        },
      ]
      return response;
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  }

}

export default newsAPI;