import React from 'react'
import styleCompVariab from 'styled-components'
import lightLogoImage from '../../../asset/logo-light.svg'
import applogoStore from '../../../asset/app-store-logo.0958106d.svg'
import googleplayStore from '../../../asset/google-play-badge.e21ffdaa.svg'


import { Link } from 'react-router-dom';

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const WrapperFooter = styleCompVariab.div`

display:block;
 
`;

const BackgroundBlac = styleCompVariab.div`
background: #1e2232;
color: #fff;
padding:20px 20px 0px 20px;
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

& .colfo2{
    flex:1;
  padding:20px 0px;
}

& .leftalign{
  text-align:left;
}

& .rightalign{
  text-align:right;
}

& img.appstore{
  width:147px;
  margin: 0px 15px;
}

& img.googstore{
  width:162px;
  margin: 0px 15px;
}

& .fm77HeartImg {
    font-size: 32px;
    color: #eb5b3c;
    margin: 0 4px;
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

const LineWhite = styleCompVariab.div`

    height: 1px;
    opacity: .1;
    border-bottom: 1px solid #fff;
    margin-top: 30px;

`;

const FooterPartSecond = styleCompVariab.div`

display:block;


& .blackwrape{
background:#191c27;
padding-bottom:20px;
}
`;

const DisplayFlexBox = styleCompVariab.div`
display:flex;
width:1100px;
margin:auto;
`;

const FlexBoxInnerStyle= styleCompVariab.div`

flex: ${props => props.bflex};
color: #${props => props.bcolor};
text-align: ${props => props.balign};
padding: ${props => props.bpadding}px;
font-size: ${props=> props.bfontsize}px;
font-weight: ${props => props.bfontweight};
`;

const FooterParttwoLinks = styleCompVariab.div`

display:flex;
max-width:1100px;
margin:auto;
padding: 10px 0;

& .labelbox{
  flex:1;
  color:#fff;
}

& .linkbox{
  flex:3;
}

& .linkbox a{
  color:#00d09c;
}

& ul{
  display:block;
  list-style-type:none;
  padding:0px;
  margin:0px;
}
& ul li{
  display: inline-block;
  list-style-type: none;
  padding: 0px 9px;
  margin: 0px;
  text-decoration: none;
}

`;

const FooterPartthreeLinks = styleCompVariab.div`

display:flex;
max-width:1100px;
margin:auto;
padding: 10px 0;

& .labelbox{
  flex:0;
  color:#7c7e8c;
}

& .linkbox{
  flex:3;
}

& .linkbox a{
  color:#7c7e8c;
}

& .linkbox a:hover{
  color:#fff;
}

& ul{
  display:block;
  list-style-type:none;
  padding:0px;
  margin:0px;
}
& ul li{
  display: inline-block;
  list-style-type: none;
  padding: 0px 9px;
  margin: 0px;
  text-decoration: none;
}

& ul li:after {
  content: '';
  width: 1px;
  height: 12px;
  background: #7c7e8c;
  position: absolute;
  margin-left: 6px;
  margin-top: 7px;
}

`;

export default function Footer() {
  return (
      <>
        <WrapperFooter>
<BackgroundBlac className="backgroundblac">
          <DisplayBlockwithWidth>

         <div className='panelfooter1 displayflex'>
          
           <div className='colfo4 pan1'>
               <LogoImageSection className='imagebox'>
                  <img src={lightLogoImage} alt="light logo" />
               </LogoImageSection> 
               <div className='addresstext'>
                  Vaishnavi Tech Park, 3rd Floor
                  Sarjapur Main Road, Bellandur
                  Bengaluru - 560103
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

         <LineWhite className='linewhite'></LineWhite>

         <DisplayBlockwithWidth className='panelfooter2 displayflex' >

         <div className='colfo2 pan21 leftalign'>
              <div class="col l6 fm77CompanyName valign-wrapper">ⓒ&nbsp;2016-2023 Groww. All rights reserved, Built with <span class="fm77HeartImg">♥</span>in India</div>
           </div>
           
           <div className='colfo2 pan22 rightalign'>
               <span><img src={applogoStore} alt="app store" className='appstore' /></span>
               <span><img src={googleplayStore} alt="app store" className='googstore' /></span>
           </div>

         </DisplayBlockwithWidth>

         </DisplayBlockwithWidth>

</BackgroundBlac>
         
         <FooterPartSecond className='panelfooter3 displayflex'>
           
           <div className='blackwrape'>
         
           <DisplayFlexBox className='wrapfoter21'>

                <FlexBoxInnerStyle className='leftalign' bfontsize="15" bfontweight="500" bflex="1" bcolor='fff' balign="left" bpadding="20" >MOST POPULAR ON GROWW</FlexBoxInnerStyle>
                <FlexBoxInnerStyle className='rightalign' bfontsize="15" bfontweight="500" bflex="1" bcolor='fff' balign="right" bpadding="20">VERSION - 3.9.3</FlexBoxInnerStyle>
           
           </DisplayFlexBox>

          <FooterParttwoLinks>

            <div className='labelbox'>
               STOCK MARKET INDICES :
            </div>
            <div className='linkbox'>
 
              <ul>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
                <li>
                  <Link to="">S&P BSE 100</Link>
                </li>
                <li>
                  <Link to="">NIFTY 100</Link>
                </li>
                <li>
                  <Link to="">NIFTY 50</Link>
                </li>
                <li>
                  <Link to="">NIFTY MIDCAP 100</Link>
                </li>
                <li>
                  <Link to="">NIFTY BANK</Link>
                </li>
                <li>
                  <Link to="">NIFTY NEXT 50</Link>
                </li>
                
              </ul>
                
            </div>

          </FooterParttwoLinks>

          
          <FooterParttwoLinks>

            <div className='labelbox'>
              POPULAR MUTUAL FUNDS :
            </div>
            <div className='linkbox'>
 
              <ul>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
                <li>
                  <Link to="">S&P BSE SENSEX</Link>
                </li>
              </ul>
            </div>


            </FooterParttwoLinks>
          
            <FooterParttwoLinks>

<div className='labelbox'>
MUTUAL FUNDS COMPANIES :
</div>
<div className='linkbox'>

  <ul>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
    <li>
      <Link to="">S&P BSE SENSEX</Link>
    </li>
  </ul>
</div>

</FooterParttwoLinks>




<FooterPartthreeLinks>

<div className='labelbox'>
  OTHERS:
</div>
<div className='linkbox'>

  <ul>
    <li>
      <Link to="">NSE</Link>
    </li>
    <li>
      <Link to="">BSE</Link>
    </li>
    <li>
      <Link to="">Terms and Conditions</Link>
    </li>
    <li>
      <Link to="">Policies and Procedures</Link>
    </li>
    <li>
      <Link to="">Regulatory & Other Info</Link>
    </li>
    <li>
      <Link to="">Privacy Policy</Link>
    </li>
    <li>
      <Link to="">Disclosure</Link>
    </li>
    <li>
      <Link to="">Bug Bounty</Link>
    </li>
    <li>
      <Link to="">Download Forms</Link>
    </li>
    <li>
      <Link to="">Investor Charter and Grievance</Link>
    </li>
  </ul>
</div>

</FooterPartthreeLinks>

         
           </div>
           

         </FooterPartSecond>



        </WrapperFooter>
      </>
  )
}
