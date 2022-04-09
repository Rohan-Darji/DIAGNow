import './navbar.css';
import Logo from '../../images/iconWithShadow.png';
import LogoName from '../../images/DIAGNow.png';
function NavigationBar() {
  return (
    <div class="topnav">
     
        <img src={Logo} height={50} className='logo' />
        <img src={LogoName} height={25}  className='logoaName'/>
    
</div>
  );
}

export default NavigationBar;