import './Header.css'

const Header = ({title , desc}) => {
  return (
    <div className='headerSection'>
        <h1>{title}</h1>
        <p className='desc'>{desc}</p>
    </div>
  )
}

export default Header