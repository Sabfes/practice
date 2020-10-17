import React, { useEffect } from 'react';
import Header from './components/Header/Header'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'


function App() {
  
  const [cards, setCards] = React.useState([])

  useEffect(()=> {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5fa2cccad737e304ab534dec6d72b0ba&tags=car&sort=interestingness-desc&content_type=1&media=photos&format=json&nojsoncallback=1&extras=views,license,date_taken,geo,owner_name,tags,views,media,url_l,owner_name`)
      .then(res => res.json())
      .then((res) => {
        setCards(res.photos.photo)
      })
  }, [])


  return (
    <div className="wrapper">
        <Header />
        <Gallery data={cards}/>
        <Footer />
    </div>
  );
}
export default App;
