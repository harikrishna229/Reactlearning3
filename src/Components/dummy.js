import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const [rest, setrest] = useState(null);
  useEffect(() => {
    fetchResMenu();
  }, []);
  const fetchResMenu = async () => {
    const resmenu = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=128084&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const jsondata = await resmenu.json();

    const resmenucarddata =
      jsondata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1];
    console.log(resmenucarddata);
    setrest(resmenucarddata);
    // const exactmenudata = resmenucarddata.map(
    //   (menu) => menu?.card?.card?.title
    // );
    //console.log(exactmenudata);
  };
  if (rest === null) return <Shimmer />;
  console.log(rest?.card?.card?.itemCards);
  const dataaaaa = rest?.card?.card?.itemCards;

  return (
    <div>
      <h1>Restaurant Name</h1>
      <h1>Menu</h1>
      <ul>
        {dataaaaa.map((ress) => (
          <li>{ress.card?.info.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
