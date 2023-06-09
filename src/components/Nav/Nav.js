import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../Category/Category';
import Search from '../Search/Search';
import Dropdown from '../Dropdown/Dropdown';
import './Nav.scss';

const NAV_MENU = Object.values(CATEGORIES);

const Nav = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tokenValue = localStorage.getItem('token');

  return (
    <div className="nav">
      <nav className="navbar">
        <div className="nav-left">
          <img
            className="logo"
            src="/images/Nav/gron-logo.png"
            alt="gron-logo"
            onClick={() => navigate('/')}
          />
          <ul className="menus">
            {NAV_MENU.map(({ title }) => {
              return (
                <li
                  className="menu"
                  key={title}
                  onMouseOver={() => {
                    setIsMenuOpen(true);
                  }}
                >
                  {title}
                </li>
              );
            })}
            {isMenuOpen && <Dropdown setIsMenuOpen={setIsMenuOpen} />}
          </ul>
        </div>

        <Search />
        <div className="icons">
          <img
            className="icon"
            src="/images/Nav/like.png"
            alt="like-icon"
            onClick={() => navigate('/wishlist')}
          />
          <img
            className="icon"
            src="/images/Nav/cart.png"
            alt="cart-icon"
            onClick={() => navigate('/cart')}
          />
          <button
            className={tokenValue ? 'display-none' : 'login-btn'}
            type="button"
            onClick={() => navigate('/login')}
          >
            로그인
          </button>
          <img
            className={tokenValue ? 'icon' : 'display-none'}
            src={process.env.PUBLIC_URL + '/images/Nav/user.png'}
            alt="user-icon"
          />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
