import './PopularContainer.css'
const PopularContainer = ({title , desc , firstImg , secImg , reverse}) => {
  return (
    <div className={`container ${reverse}`}>
        <div className="txt">
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        <div className="images">
            <img src={firstImg} alt="" />
            <img src={secImg} alt="" />
        </div>
    </div>
  )
}

export default PopularContainer