import React, { useRef } from 'react'
import Hero from '../components/Hero/Hero'
import PopularDestinations from '../components/PopularDestinations/PopularDestinations'
import RecentTrips from '../components/RecentTrips/RecentTrips'

const Home = () => {
    const hero = useRef(null)
    const popular = useRef(null)
    const top = () => {
        console.log(hero.current.offsetTop);
        window.scrollTo({
            top: popular.current.offsetTop - 150,
            behavior : "smooth"
        })
    }
    return (
        <div>
            <div >
                <Hero test={hero} img="/assets/img/12257c5311e1cae5638aad.jpg" title="Your Journey Your Story" desc="Choose Your Favourite Destination." btn="Travel Now" />
            </div>
            <h1>hello world</h1>
            <div ref={popular}>
                <PopularDestinations />
            </div>
            <RecentTrips />
            <button onClick={top}>click</button>
        </div>
    )
}

export default Home