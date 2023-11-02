import Buttons from '../components/button'
import './Recommended.css'

const Recommended = ({handleClick}) => {
  return (
    <div>
      <h2 className='recommemded-title'>Recommended</h2>
      <div className="recommemded-flex">
        <Buttons onClickHandler={handleClick} value="" title="All Products" />
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  )
}

export default Recommended