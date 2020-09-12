import React, { useState } from 'react';

import './styles.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function SlideShow(params) {
    const [move, setMove] = useState(0);  
    const [index, setIndex] = useState(0);  
    const imgs = params.imgs;

    const toRight = () => {
      const total = imgs.length * 1500;
      const m = move - 1500;
      
      if (total + m > 0){
        setMove(m);
        setIndex(index + 1);
      }

    }
    const toLeft = () => {
      const m = move + 1500;
      
      if (move < 0){
        setMove(m);
        setIndex(index - 1);
      }
    }
    return (
       <div className="slide">
          <div className="content-slide">
            <div className="controls">
              <div className="prev">
                <MdChevronLeft color="#fff" size={45} className="navigator" style={ move >= 0 && {display: 'none'} } onClick={_ => toLeft()}/>
              </div>
              <div className="next">
                <MdChevronRight color="#fff"size={45} className="navigator" style={index + 1 === imgs.length && {display: 'none'}} onClick={ _=> toRight()}/>
              </div>
            </div>
          </div>
          <div className="screem">
            <div className="show" style={ {marginLeft: move} }>
              {imgs.map((e, i) => <img src={e} key={i}></img>)}   
            </div>    
            <div className="dots">
              {imgs.map((img, i) => <div key={i} className={index === i ? 'dot active' : 'dot'}></div>)}
            </div>  
          </div>  
       </div>        
    );
}