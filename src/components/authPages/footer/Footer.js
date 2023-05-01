import React from 'react'
import styleCompVariab from 'styled-components'
import lightLogoImage from '../../../asset/logo-light.svg'
import { Link } from 'react-router-dom';

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const WrapperFooter = styleCompVariab.div`
background: #1e2232;
color: #fff;
padding:20px;
`;

const DisplayBlockwithWidth = styleCompVariab.div`
max-width:1100px;
width:100%;
margin:auto;
display:block;

& .displayflex{
  display:flex;
}

& .colfo4{
  flex:1;
  padding:20px;
}

& .colfo4.pan1{
  flex:1.5;
}

`;

const HeadingWrapper = styleCompVariab.h2`
color:#fff;
font-size: 1.125rem;
text-transform: uppercase;
`;

const UlWithoutdotandPadding = styleCompVariab.ul`

list-style-type:none;
padding:0px;
margin:0px;

& li{
  list-style-type:none;
padding:0 0px 10px;
margin:none;
}

& li a{
  color:#fff;
  font-size: 15px;
    font-weight: 400;
}

`;

const SocialIconColor = styleCompVariab.div`

& a{
background: #fff;
padding: 8px 8px 4px;
margin: 6px 12px 5px 0px;
border-radius: 50%;
font-size: 18px;
display:inline-block;
}

`;

const SocialIconLinks = styleCompVariab(Link)`
color: #${ props => props.color};
`;

const LogoImageSection = styleCompVariab.div`

min-width: 150px;
min-height: 79px;

& img{
width:150px;
}

`;

export default function Footer() {
  return (
      <>
        <WrapperFooter>

          <DisplayBlockwithWidth>

         <div className='panelfooter1 displayflex'>
          
           <div className='colfo4 pan1'>
               <LogoImageSection className='imagebox'>
                  <img src={lightLogoImage} alt="light logo" />
               </LogoImageSection> 
               <div className='addresstext'>
                  Vaishnavi Tech Park, 3rd Floor
                  Sarjapur Main Road, Bellandur
                  Bengaluru – 560103
               </div>
               <div className='contactus'>
                <UlWithoutdotandPadding>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                </UlWithoutdotandPadding>
                 
               </div>
               
               <SocialIconColor className='socialicons'>
                   <SocialIconLinks to="#" color="3c5a9a" ><BsFacebook /></SocialIconLinks>
                   <SocialIconLinks to="#" color="1da1f2"><BsTwitter /></SocialIconLinks>
                   <SocialIconLinks to="#" color="f00"><BsYoutube /></SocialIconLinks>
                   <SocialIconLinks to="#" color="f4b3b7"><BsInstagram /></SocialIconLinks>
                   <SocialIconLinks to="#" color="069"><BsLinkedin /></SocialIconLinks>
                   <SocialIconLinks to="#" color="34aadf"><BsTelegram /></SocialIconLinks>
               </SocialIconColor>
          

           </div>

           <div className='colfo4 pan2'>
             <HeadingWrapper>
                 Products
             </HeadingWrapper>
             <UlWithoutdotandPadding>
              <li><Link to="#">Stocks</Link></li>
              <li><Link to="#">Futures & Options</Link></li>
              <li><Link to="#">Mutual Funds</Link></li>
              <li><Link to="#">US Stocks</Link></li>
              <li><Link to="#">Credit</Link></li>
              <li><Link to="#">Groww Pay</Link></li>
              <li><Link to="#">Insurance</Link></li>
             </UlWithoutdotandPadding>
           </div>
           <div className='colfo4 pan3'>
           <HeadingWrapper>
                 Groww
             </HeadingWrapper>
             <UlWithoutdotandPadding>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Pricing</Link></li>
              <li><Link to="#">Blog</Link></li>
              <li><Link to="#">Media & Press</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Help and Support</Link></li>
             </UlWithoutdotandPadding>
           </div>

           <div className='colfo4 pan4'>
           <HeadingWrapper>
                 quick links
             </HeadingWrapper>
             <UlWithoutdotandPadding>
              <li><Link to="#">AMC Mutual Funds</Link></li>
              <li><Link to="#">Calculators</Link></li>
              <li><Link to="#">Glossary</Link></li>
              <li><Link to="#">Open Demat Account</Link></li>
              <li><Link to="#">Groww Digest</Link></li>
              <li><Link to="#">Sitemap</Link></li>
             </UlWithoutdotandPadding>
             
         
           </div>

         </div>

         <div className='panelfooter2 displayflex' >

         <div className='colfo2 pan21'>
             x 21
           </div>
           
           <div className='colfo2 pan22'>
             x 22
           </div>

         </div>

         <div className='panelfooter3 displayflex'>
           
           xyz3

         </div>
         
         </DisplayBlockwithWidth>

        </WrapperFooter>
      </>
  )
}
