import React from 'react';

import SlideList from "./SlideNewsList";
import '../../styles/SectionNews/SliderNews.css'

const SliderNews = () => {

  // const [photo, setPhoto] = useState([])
  //
  //
  // useEffect(() => {
  //   async function getPhotos() {
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/photos/24')
  //     console.log(response.data)
  //     setPhoto(response.data)
  //   }
  //   getPhotos()
  // }, [])





  return (
    <div className="slider">
      <SlideList/>
    </div>
  );
};

export default SliderNews;