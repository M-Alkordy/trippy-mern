import './Hero.css'

const Hero = (props) => {
  return (
    <div className='hero' ref={props.test}>
        <img src={props.img} alt="" />
        <div className="items">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <button style={{display : (props.btn)? "inline" : "none"}} >{props.btn}</button>
        </div>
    </div>
  )
}

export default Hero