import React, { useState } from 'react';
import { EllipsisVertical, User2Icon } from 'lucide-react';
import ProfileModal from './Profilemodal';

const HeaderButton = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);

    const openProfileModal = () => setShowProfileModal(true);
    const closeProfileModal = () => setShowProfileModal(false);

    const connectWallet = async () => {
      setIsConnecting(true); // Start the connection process
      try {
        const response = await fetch('https://run.mocky.io/v3/5e22386a-c010-4aa1-9e17-e9ea7300aa25', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ action: 'connectWallet' })
        });
  
        const data = await response.json();
        if (!response.ok) {
          throw new Error('Failed to connect wallet');
        }
  
        saveUser({ walletAddress: data.walletAddress, balance: data.balance, id: data.id });
        alert("Connected Successfully");
        
      } catch (error) {
        console.error('Error connecting to the wallet:', error);
        alert('Error connecting to the wallet.');
      } finally {
        setIsConnecting(false); // End the connection process
      }
    };

    const disconnectWallet = () => {
        localStorage.removeItem('userDetails');
        window.location.reload();
    };

    const saveUser = (userData) => {
        localStorage.setItem('userDetails', JSON.stringify(userData));
    };

    var user = localStorage.getItem('userDetails');
    if (user) {
        user = JSON.parse(user);
    }

    return (
        <li className='header-btn' onMouseLeave={() => setShowDropdown(false)}>
            {user && user.walletAddress ? (
                <div className="connected-box cursor-pointer border p-1 px-3" onMouseEnter={() => setShowDropdown(true)}>
                    <div className="row">
                        <div className="col-3 align-content-center">
                            <User2Icon className='text-main-dark' />
                        </div>
                        <div className="col-6">
                            <h6 className='mb-0'>{user.walletAddress ? `${user.walletAddress.slice(0, 5)}...${user.walletAddress.slice(-5)}` : 'No Address'}</h6>
                            <span className="pink">{user.balance} SOL</span>
                        </div>
                        <div className="col-3 align-content-center px-1">
                            <EllipsisVertical className='text-main-dark' />
                        </div>
                    </div>
                </div>
            ) : (
                <button className='btn btn-main' onClick={connectWallet} disabled={isConnecting}>
                    {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </button>
            )}
            {user && user.walletAddress && (
                <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`} onMouseEnter={() => setShowDropdown(true)}>
                    <a className="dropdown-item pt-2 cursor-pointer" onClick={openProfileModal}>Profile</a>
                    <a className="dropdown-item cursor-pointer pt-2" onClick={disconnectWallet}>Disconnect Wallet</a>
                </div>
            )}
            <ProfileModal onClose={closeProfileModal} show={showProfileModal} />
        </li>
    );
};

export default HeaderButton;
