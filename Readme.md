/\*\*

- app layout
- header
- body
- footer
-
- header
- -log0
- nav items
- body
- search
- rest.container
-      rest.card
- footer
- copyrights
- adrress
- contact

\*/
https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

shift +alt+f -prteeir formatter

https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=128084&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER

console.log(outerItem);
{outerData.slice(0).map((outerItem) => (

<li>
{/_ Render outer item _/}
<div>{outerItem.card.card.title}</div>
{/_ Inner list _/}
<ul>
{/_ Inner map _/}
{outerItem?.card?.card?.itemCards.map((innerItem) => (
<li>{innerItem.card.info.name}</li>
))}
</ul>
</li>
))}

const cardtitle=element.card?.card?.title);

          const carditems=element.card?.card?.itemCards);

            <ul>
        {outerData
          .slice(2, -2)
          .map((element, index) => {
            const cardtitle = element.card?.card?.title;
            console.log(cardtitle);
            const carditems = element.card?.card?.itemCards;
            console.log(carditems);
            // Use map() to generate an array of JSX elements
            const cardItemsList = carditems.map((el, itemIndex) => (
              <li key={itemIndex}>{el?.card?.info?.name}</li>
            ));
            // Return an object containing cardtitle and cardItemsList
            return { cardtitle, cardItemsList };
          })
          .map((data, index) => (
            // Render cardtitle and cardItemsList here
            <div key={index}>
              <h3>{data.cardtitle}</h3>
              <ul>{data.cardItemsList}</ul>
            </div>
          ))}
      </ul>
