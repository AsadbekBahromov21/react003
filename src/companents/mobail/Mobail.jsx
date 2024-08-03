import React from 'react'
import "./mobail.scss"
const Mobail = ({cl,matn,nav, foto, button,image}) => {
    console.log(matn);
  return (
    <div>
        <div  className="mobail__wrapper">
            <div className="mobail__text">
                <p className='mobail__p'>{matn}</p>
               
                <div className="mabail__theme">
                {
                    nav?.map((el, index)=>(<p className="hero__key" key={index}>{el}</p>))
                }
                </div>
                <div className="mobail__img">
                    <img className='foto' src={foto} alt="" />
                </div>
                <div className="mobail__btr">
                    {
                        button?.map((el, index)=>(<button key={index} className='button'>{el}</button>))
                    }
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Mobail