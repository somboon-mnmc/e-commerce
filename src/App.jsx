
import './App.css'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import {useState} from 'react'

import products from './db/data'
import Cards from './components/Cards'


function App() {
  const [selectCategory, setSelectCategory] = useState(null)
  const [query , setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filtereditems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1))
  
  // Radio Filter
  const handleChange = event => {
    setSelectCategory(event.target.value)
  }

  // Button Filter

  const handleClick = event => {
    setSelectCategory(event.target.target)
  }

  const filteredData = (products, selected, query) => {
    let filteredProducts = products
    if (query) {
      filteredProducts = filtereditems
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title }) => category === selected || color === selected || company === selected || newPrice === selected || title === selected)
    }

    return filteredProducts.map(({img, title, start, newPrice, reviews, prevPrice}) => (
      <Cards 
        key={Math.random()}
        img={img}
        title={title}
        start={start}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice} 
      />
    ))
  }
  
  const result = filteredData(products, selectCategory, query) 


  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navbar query={query} handleInputChange={handleInputChange}/> 
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </>
  )
}

export default App
