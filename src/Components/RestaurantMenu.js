import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  restaurantList,
} from "../Constants";
import { addItem } from "../utils/cartSlice";
import AddRemoveBtn from "./AddRemoveBtn";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const dispatch = useDispatch()
  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId + '&submitAction=ENTER');
      const json = await response.json();
      console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2])
      // setRestaurant(json?.data);
      setRestaurant(restaurantList.data);
    } catch (error) {
      console.log(error);
    }
  }

  return !restaurant ? (
    <div style={{ marginTop: '100px' }
    }>
      <Shimmer />
    </div >)
    : (
      <div className="restaurant-menu">
        <div className="restaurant-summary">
          <img
            className="restaurant-img"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div className="restaurant-summary-details">
            <h1 className="restaurant-title">{restaurant?.name}</h1><br />
            <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p> <br />
            <p className="restaurant-tags"><i className="fa-solid fa-location-dot"></i> {restaurant?.area}</p> <br />
            <div className="restaurant-details">
              <div className="restaurant-rating">
                <i className="fa-solid fa-star"></i>
                <span>{restaurant?.avgRating}</span>
              </div>
              <div className="restaurant-rating-slash">|</div>
              <div>{restaurant?.totalRatingsString}</div>
              <div className="restaurant-rating-slash">|</div>
              <div>{restaurant?.costForTwoMsg}</div>
            </div>
          </div>
        </div>

        <div className="restaurant-menu-content">
          <div className="menu-items-container">
            <div className="menu-title-wrap">
              <p className="menu-count">
                {Object.keys(restaurant?.menu?.items).length} ITEMS
              </p>
            </div>
            <div className="menu-items-list">
              {Object.values(restaurant?.menu?.items).map((item) => (
                <div className="menu-item" key={item?.id}>
                  <div className="menu-item-details">
                    <h3 className="item-title">{item?.name}</h3>
                    <p className="item-cost">
                      {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                        : " "}
                    </p>
                    <p className="item-desc">{item?.description}</p>
                  </div>
                  <div className="menu-img-wrapper">
                    {item?.cloudinaryImageId && (
                      <img
                        className="menu-item-img"
                        src={ITEM_IMG_CDN_URL + item?.cloudinaryImageId}
                        alt={item?.name}
                      />
                    )}
                    <AddRemoveBtn {...item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default RestaurantMenu;