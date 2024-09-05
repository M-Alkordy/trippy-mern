import Card from '../Card/Card'
import Header from '../Header/Header'
import './RecentTrips.css'
import { data } from './data'

const RecentTrips = () => {
  return (
    <div className='recent'>
      <Header title="Recent Trips" desc="You can discover unique destination using Google Maps." />
      <div className="container">
        {data.map((element, index) => {
          return (
            <Card key={index} img={element.img} title={element.title} desc={element.desc} />
          )
        })}
      </div>
    </div>
  )
}

export default RecentTrips