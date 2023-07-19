import Carrousel from "../../../Components/Carrousel";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer/index";
import jsonData from "../../../datas/datas.json"
import Tag from "../../../Components/Tag";
import Rating from "../../../Components/Rating";
import Collapse from "../../../Components/Collapse/index"
import React from "react";
import '../../../styles/detail.scss'


function Detail() {
    const { id } = useParams();
    const selectedData = jsonData.find((item) => item.id === id);

    if (!selectedData) {
      return <Navigate to="/Error" />
      
    }
    
  
 
    const { title, location, host, tags, rating, description, equipments } = selectedData;
    const hostName = host.name;
    const hostPic = host.picture;
    const data = [
      {
        title: "Description",
        description: description
      },
      {
        title: "Équipements",
        description: equipments.map((equipment) => (
          <p className="equipementText" key={equipment}>
            {equipment}
            <br />
          </p>
        ))
      }
    ];
  
    return (
      <div>
        <Header />
        <Carrousel />
        <div className="locationHost">
            <div className="locationTag">
                <div className="locationTitle">
                    <h1>{title}</h1>
                    <p className="location">{location}</p>
                  </div>
                  <div className="tags">
                    {tags.map((tag, index) => <Tag key={index} tag={tag} />)}
                  </div>
            </div>
            <div className="hostRating">
                <div className="host">
                  <p className="hostName">{hostName}</p>
                  <img src={hostPic} alt="Hôte" className="hostPic"/>
                </div>
                <div className="ratings">
                  <Rating rating={rating} />
                </div>
              </div>
        </div>
            <div className="collapseContainer">
              {data.map((item, index) => (
                <Collapse key={index} title={item.title} description={item.description} />
              ))}
            </div>
            <Footer/>
      </div>
    );
  }
  
  export default Detail;