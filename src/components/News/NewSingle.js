import React from 'react';
import './NewSingle.css'

import './Message'

const imageHeight = {
  height : '171px',
  weight: '256px'
}
const NewSingle = ({item}) => (
  <div className="col s4 zoom">
    <div className="card">
      <div className="card-image" style = {imageHeight}>
        <img src={item.urlToImage} alt={item.title}/>
      </div>
      <div className="card-content">
      <p>{item.source.name}</p>
      {/* <a href={} target="_blank"></a> */}
      </div>
      <div className="card-content" >
        <p>{item.title}...</p>
       
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank">Read Full article</a>
      </div>
    </div>
  </div>
);

export default NewSingle;
