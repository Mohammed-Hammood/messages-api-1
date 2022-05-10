import {useEffect, useState} from 'react';
import useFetch from './fetch-data';
import '../styles/home-page.scss';
import img_profile from '../assets/img_profile.svg';
import { getFullDate } from './common';
import buttonsTop from '../assets/buttons-top.png';
import SVG from '../assets/svg';
import { updateFavorite, getFavorite } from './local-storage'

export default function HomePage() {
    const {loading, messages} =  useFetch();
    const [state, setState] = useState<boolean>(false);    
    useEffect(()=> {
          
        }, []);

  return (
    <div className="home-page-container"> 
        {loading?<div className='loader'><span></span></div>:null}<br></br>
         {(messages.length > 0)?<>
          <div className='messages-container'>{
            messages.map((item:any, index:number) => {
              return (<div className="message" key={index}>
                    <div className='column-1'>
                      <div className='row-1-left'>
                        <img className='svg' alt='img' src={img_profile } />
                        <span className='time'>{getFullDate(item.date, 'time')}</span>
                      </div>
                    </div>
                    <div className='column-2'>
                      <div className='top-buttons-container'>
                      <div className='row-1-left'>
                        <div className='author'>{item.author}</div>
                        <div className='channel'>{item.channel }</div>
                      </div>
                      <div className='row-2-right' >
                          <div className='frames-container'>
                            <button type='button' ><span>Левый</span></button>
                            <button type='button' ><span>Центр</span></button>
                            <button type='button' ><span>Правый</span></button>
                          </div>
                          <div className='buttons-version-container'>
                            <div className='img-container' >
                               <img src={buttonsTop} alt='img' />
                            </div>
                            <div className='svg-container' onClick={() => {updateFavorite(parseInt(item.id)); setState(state => !state)} }>
                              {getFavorite(parseInt(item.id))? <SVG name='star' color='blue' />: <SVG name='star' color='lightgray' />}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='content'>{item.content}</div>
                      <div className='media'>
                        {item.attachments.map((obj:any, index:number) => {
                          return (<div key={index} className='media-container'>
                              {(obj.type ==='video'?<video src={obj.url} controls />:null)}
                              {(obj.type ==='image'?<img alt='img' src={obj.url} />:null)}
                          </div>)
                        })}
                      </div>
                    </div>
                  </div>)
                })
              }
          </div>
         </>:null
      }
    </div>
  );
}


