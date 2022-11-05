import React, { useRef } from 'react';

import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';

// import BsSkipEndCircleFill from 'react-icons/bs';


const Player = ({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs})=> {

  const clickRef = useRef();

  const PlayPause = ()=>
  {
    setisplaying(!isplaying);

  }


  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }

  const skipBack = ()=>
  {
    const index = songs.findIndex(x=>x.title === currentSong.title);
    if (index === 0)
    {
      setCurrentSong(songs[songs.length - 1])
    }
    else
    {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    
  }


  const skiptoNext = ()=>
  {
    const index = songs.findIndex(x=>x.title === currentSong.title);

    if (index === songs.length-1)
    {
      setCurrentSong(songs[0])
    }
    else
    {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;
    
  }

  return (
    <div className='player_container'>
      <div className="title">
        <p>{currentSong.title}</p>
      </div>
      <div className="w-full">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
        </div>
      </div>
      <div className="flex items-center">
        <BsFillSkipStartCircleFill className='cursor-pointer text-3xl my-0 mx-4' onClick={skipBack}/>
        {isplaying ? <BsFillPauseCircleFill className='cursor-pointer  my-0 mx-4 text-6xl' onClick={PlayPause}/> : <BsFillPlayCircleFill className='cursor-pointer  my-0 mx-4 text-6xl' onClick={PlayPause}/>}
        <BsFillSkipEndCircleFill className='cursor-pointer text-3xl my-0 mx-4' onClick={skiptoNext}/>        
      </div>
    </div>
  
  )
}

export default Player