import React from "react";
import fb from  "../images/fb.png";
import insta from '../images/insta.png';
import twitter from '../images/twitter.png'

function Footer(props) {
  return (
    <div className="footer">

        <div className="footer__content"> 
<div className="footer__category"> 

  <p className="footer__name"> {'CATEGORIES'}</p>
  <a className="footer__item"> {'IOS Developers'}</a>
  <a className="footer__item"> {'UX Designers'}</a>
  <a className="footer__item"> {'UI Designers'}</a>
</div>
<div className="footer__community"> 

  <p className="footer__name"> {'COMMUNITY'}</p>
  <a className="footer__item"> {'Events'}</a>
  <a className="footer__item"> {'Blog'}</a>
  <a className="footer__item"> {'Forum'}</a>
</div>
<div className="footer__about"> 

  <p className="footer__name"> {'ABOUT'}</p>
  <a className="footer__item"> {'AboutUs'}</a>
  <a className="footer__item"> {'PartnerShips'}</a>
</div>

<div className="footer__contact"> 

  <p className="footer__name"> {'CONTACT'}</p>
  <a className="footer__item"> {'Contact Us'}</a>
  <a className="footer__item"> {'Press Center'}</a>
</div>
  </div>



  <div className="footer__btnSocailMedia">
  <div className="footer__btnMedia"> 
 <img src={insta} className="footer__pictureSocailMedia" alt="socialMedia" />
 </div>
 <div className="footer__btnMedia"> 
 <img src={fb} className="footer__pictureSocailMediaFb" alt="socialMedia" />
 </div>

 <div className="footer__btnMedia"> 
 <img src={twitter} className="footer__pictureSocailMedia" alt="socialMedia" />
 </div>




  
        </div>
 
    </div>
  );
}

export default Footer;
/*

<div className="footer__phone"> 
<div className="footer__about"> 

  <p className="footer__name"> {'ABOUT'}</p>
  <p className="footer__item"> {'AboutUs'}</p>
  <p className="footer__item"> {'PartnerShips'}</p>
</div>

<div className="footer__contact"> 

  <p className="footer__name"> {'CONTACT'}</p>
  <p className="footer__item"> {'Contact Us'}</p>
  <p className="footer__item"> {'Press Center'}</p>
</div>

</div>


*/
