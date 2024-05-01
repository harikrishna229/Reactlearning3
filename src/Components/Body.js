import Restcard from "./Restcard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // state varaible -whenever state chnages, diff alogirthm compare virtual dom -- and re render the component
  const [listofres, setlistofres] = useState([]);
  const [filteredres, setfilteredres] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchfunction();
  }, []);

  const fetchfunction = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const obj =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    const restobj = obj.map((obj) => obj.info);
    setlistofres(restobj);
    setfilteredres(restobj);
  };

  return listofres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchtext"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="searchbtn"
            onClick={() => {
              //console.log(listofres);
              // const filterresd=listofres.filter(res=>res.name.includes(searchText));
              const filteredRes = listofres.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredres(filteredRes);
              if (searchText === "") {
                setfilteredres(listofres);
              }
            }}
          >
            search
          </button>
        </div>
        <button
          className="filterbtn"
          onClick={() => {
            let filterarray = listofres.filter((res) => res.avgRating >= 4.3);

            setfilteredres(filterarray);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restcontainer">
        {filteredres.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.id}>
            <Restcard key={restaurant.id} restdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
