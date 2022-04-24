import React, {useState} from 'react';
import './style.css';
import blindsOpen from './img/blinds-open.svg'
import blindsClosed from './img/blinds-closed.svg'



const Blinds = ({state}) =>{
   const [blindsOpening, setBlindsOpening] = useState(state);
   const handleClickOpen = () => {

		if (blindsOpening === 'open') {
			setBlindsOpening('closed')
		} else {setBlindsOpening('open')}
	}
	const handleClickClosed = () => {

		if (blindsOpening === 'closed') {
			setBlindsOpening('open')
		} else {setBlindsOpening('closed')}
	}

   return (
      <div className='blinds'>
         <div className='blinds__icon'>
            <img src={blindsOpening === 'open' ? blindsOpen : blindsClosed}/>
         </div>
         <div className='blinds__name'>
            Žaluzie
         </div>
         <div className="blinds__controls">
            <button className={blindsOpening === 'open' ? "button button--active" : "button"} onClick={handleClickOpen}>Otevřeno</button>
            <button className={blindsOpening === 'closed' ? "button button--active" : "button"} onClick={handleClickClosed}>Zavřeno</button>
         </div>
      </div>
   );
}



export default Blinds;