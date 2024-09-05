import './Card.css'

const Card = ({img , title , desc}) => {
  return (
    <div className='card'>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Card