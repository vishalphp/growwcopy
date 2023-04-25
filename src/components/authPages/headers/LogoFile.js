import LogoImage from '../../../asset/logo-dark-groww.svg'

import moduleCss from './css/Header1.module.css'

const LogoFile = () =>{

    return(
        <>
           <img src={LogoImage} alt="grow dark black logo" className={`${moduleCss.logomaxwidth}`} />
        </>
    );

}

export default LogoFile;