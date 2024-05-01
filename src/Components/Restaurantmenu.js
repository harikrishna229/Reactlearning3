import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resinfo, setresinfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchResMenu();
  }, []);
  const fetchResMenu = async () => {
    const resmenu = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=" +
        resId +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const jsondata = await resmenu.json();
    const { cards } = jsondata?.data;
    setresinfo(cards);
  };
  if (resinfo === null) return <Shimmer />;

  const { text } = resinfo[0]?.card?.card;
  const { itemCards } =
    resinfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div>
      <h1>{text}</h1>
      <h1>Menu</h1>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
