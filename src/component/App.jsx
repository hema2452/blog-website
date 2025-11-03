import Header from "./Header"
import MainContent from "./MainContent"
import data from './data.js'

function App() {
  
  const componentArray = data.map((item) =>{
    return( 
        <MainContent 
        key = {item.id}
        data = {item}
        // img={item.img.src} 
        // alt={item.img.alt} 
        // img = {item.img}
        // title={item.title} 
        // country={item.country} 
        // googleMapsLink = {item.googleMapsLink}
        // dates = {item.dates}
        // text = {item.text}     
      />)}

  )

  return (
    <>
      <Header/>
      {componentArray}
    </>
    
  )
}

export default App
