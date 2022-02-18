import React ,{useContext} from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';



import { AuthContext, FirebaseContext } from '../../store/Context';
function Header() {
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const {user} = useContext (AuthContext)


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>{history.push('/')}}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">

<select name="cars" id="cars">
  <option value="volvo">ENGLISH</option>
  <option value="saab">HINDI</option>
  <option value="mercedes">TAMIL</option>
  <option value="audi">MALAYALAM</option>
</select>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={()=>{history.push('/login')}}>{user ? user.displayName : 'Login'}</span>
          <hr />
        </div>
        {user && <a onClick={()=>{
          firebase.auth().signOut();
          history.push('/login')
        }}>Logout</a>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span  onClick={()=>{
              {!user?history.push('/login') : history.push('/create')}
            }}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
