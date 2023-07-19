import { useEffect, useState } from "react";
import Header from "../../../Components/Header"
import Banner from "../../../Components/Banner"
import landscapeHome from "../../../assets/pictures/landscape-home.png"
import '../../../styles/home.scss'
import Card from "../../../Components/Card"
import jsonData from "../../../datas/datas.json";
import Footer from "../../../Components/Footer/index"

function Home () {
    const [data, setData] = useState([]);
    useEffect(()=> {
        setData(jsonData);
    
    } );

  
return (

    <div>
    <Header />
    <Banner image={landscapeHome} text="Chez vous, partout et ailleurs" />
    <div className="location-grid" >
        <div className="cards">
             {data.map((item) => (
                  <div className="card-container" key={item.id}>
                     <Card title={item.title} cover={item.cover} id={item.id}/>
                    </div>
                ))}
        </div>
    </div>
        <Footer />
    </div>
)
}
export default Home