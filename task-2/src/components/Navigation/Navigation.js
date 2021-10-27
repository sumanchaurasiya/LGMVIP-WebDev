import React from 'react';
import Button from '@material-ui/core/Button';
import './Navbar.css';

const Navigation = ({onButtonSubmit}) => {

            return(
                <nav className='navbar'>
                    <h3 className="logo">My Clients</h3>
                    <div className='nav-links'>;
                        <Button variant="contained" onClick={onButtonSubmit} color="orange">
                            Get Users
                        </Button>
                    </div>
                </nav>
            );
        }


export default Navigation;
