import { useState } from "react";
import PopularContainer from "../PopularContainer/PopularContainer"
import './PopularDestinations.css'
import Header from "../Header/Header";

const PopularDestinations = () => {
  const title = "Mt. Daguldul, Batangas";
  const desc = "One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!";
  const firstImg = "/assets/img/1.jpg"
  const secImg = "/assets/img/2.jpg"
  const sectitle = "Taal Volcano, Batangas";
  const secdesc = "A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total.";
  const thirdImg = "/assets/img/3.jpg"
  const fourthImg = "/assets/img/4.jpg"
  return (
    <div className="popular">
      <Header title="Popular Destinations" desc="Tours dive you the opportunity to see a lot, within a time frame." />
      <PopularContainer title={title} desc={desc} firstImg={firstImg} secImg={secImg} />
      <PopularContainer title={sectitle} desc={secdesc} firstImg={thirdImg} secImg={fourthImg} reverse ="reverse" />
    </div>
  )
}

export default PopularDestinations