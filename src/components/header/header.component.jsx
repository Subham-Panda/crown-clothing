import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to='/'>
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            {<CartIcon/>}
        </div>
        {
            !hidden ?
            (<CartDropdown/>)
            :
            ''
        }
    </div>
)

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
// })


// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

//We can also do the above as below using createStructuredSelector which automatically passes the state into the selector functions

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);