import React from 'react';
import "./Header.css";
import { Facebook } from "@material-ui/icons";
import { Twitter } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { YouTube } from '@material-ui/icons';
import odishalogo from '../images/odishalogo.png';
import newormaslogo1 from '../images/newormaslogo1.png';
import cm_on_nav from '../images/cm_on_nav.png';

const handlelink=()=>{

}
function Header() {
  return (
    <div className='sticky-position'>
        <span id="header">
            <div className='container'>
                <div className='scroll-container'>
                    <span className='mobile-responsive'>
                    <font className='govt-heading'>Goverment of Odisha</font>
                     <font className='odia'> ଓଡ଼ିଶା ସରକାର</font>
                     </span>
                     <span className='mobile-none'>
                        <span className='container2'>
                        <a className='yellow-text' href={handlelink}>RTI | Feedback | Annual Report</a>
                        <font className="odiayai">ଓଡ଼ିଆ</font>
                        <span className='social-icons'>
                            <Facebook />
                            <Twitter />
                            <LinkedIn />
                            <YouTube />
                        </span>
                        </span>
                     </span>
                   
                </div>

                <img src={odishalogo} style={{paddingTop:"7%", height:"100px", width:"152px"}} /> 
                <div style={{ display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop:"2px", 
            alignItems: "center"}}
           
          >
            <a href={handlelink}>
          <img src={newormaslogo1} alt="" className="mobile-none" style={{height:"84px",marginTop:"2px"}}/> </a>
        <marquee behavior="" class="mobile-none" direction=""
          style={{color: "black", fontFamily:"Brush Script MT", fontSize:"19px", marginTop:"-13px"}}> Creating
          Competence and Values in Rural Odisha
        </marquee>
       </div>

          <div class="cm headercm" style={{display: "flex"}}>
        <div class="cmText" style={{whiteSpace: "nowrap"}}>
          <h6 style={{margin: "0", paddingTop:"30%"}}><strong style={{fontWeight: "bold"}} className="mobile-text">Shri Naveen
              Patnaik</strong></h6>
          <p style={{margin:"0", padding : "0"}}>Hon'ble Chief Minister</p>
        </div>
        <img style={{marginTop: "-25px",marginBottom: "0", width: "110px", height:"126px",bottom:"0"}} src={cm_on_nav}
          alt="" className="brand-logo right" />
      </div>
      
    </div>

        </span>

        <nav className="" role="navigation" 
      style={{display: "flex", paddingLeft: "25%", backgroundColor:"#009d00", marginTop:"-4px", height:"43px"}}>
      <div className="nav-wrapper container" style={{margin: "0px"}}>
        <ul className="center hide-on-med-and-down" >
          <li className="tab white-text"
            style={{borderLeft: "1px solid #14520b", paddingLeft:"2px", paddingRight:"2px",height:"43px"}}>
            <a href="#test1" className="white-text">Home</a>
          </li>
          <li style={{borderLeft: "1px solid #14520b", height:"43px"}}>
            <a className="dropdown-trigger white-text" href="#!" data-target="aboutUsDrop">About Us<i
                className="material-icons right">arrow_drop_down</i></a>
          </li>
          <li style={{borderLeft: "1px solid #14520b",height:"43px"}}>
            <a className="dropdown-trigger white-text" href="#!" data-target="dduGkyDrop">DDU-GKY<i
                className="material-icons right">arrow_drop_down</i></a>
          </li>
          <li className="tab white-text" style={{borderLeft: "1px solid #14520b",height:"43px"}}>
            <a href="#test1" className="white-text">Activities</a>
          </li>
          <li style={{borderLeft: "1px solid #14520b",height:"43px"}}>
            <a className="dropdown-trigger white-text" href="#!" data-target="productsDrop">Products<i
                className="material-icons right">arrow_drop_down</i></a>
          </li>
          <li style={{borderLeft: "1px solid #14520b",height:"43px"}}>
            <a className="dropdown-trigger white-text" href="#!" data-target="exhibitionDrop">Exhibition<i
                className="material-icons right">arrow_drop_down</i></a>
          </li>
          <li style={{borderLeft: "1px solid #14520b",borderRight: "1px solid #14520b",height:"43px"}}
            class="tab white-text">
            <a href="#test1" className="white-text">Tender</a>
          </li>
        </ul>
        {/* <ul id="nav-mobile" className="sidenav" style={{display:"flex"}}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">DDU-GKY</a></li>
          <li><a href="#">Activities</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Exhibition</a></li>
          <li><a href="#">Tender</a></li>

        </ul> */}
        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons"
            style={{color: "#ffffff", marginLeft: "-100px", marginTop: "-5px"}}>menu</i></a>
      </div>
    </nav>

    </div>
  )
}

export default Header