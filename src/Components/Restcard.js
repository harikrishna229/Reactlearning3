import { cdn_images_url } from "../Utils/constants";

const Restcard= (props)=>{
    const {name,cuisines,avgRating,sla,cloudinaryImageId}=props?.restdata;
   
    return (
       <div className="rescard">
        <img className="reslogo" src={cdn_images_url+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{sla.deliveryTime}minutes</h4>
       </div>
    );

};

export default Restcard;