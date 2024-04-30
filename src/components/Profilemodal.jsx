import React from 'react';
import { EditIcon, Wallet2Icon } from 'lucide-react';
import './profileModal.css';

const ProfileModal = ({ onClose, show }) => {
    if (!show) return null;
    const disconnectWallet = () => {
        localStorage.removeItem('userDetails');
        window.location.reload();
    };
    return (
        <div className="profile-modal" onClick={onClose}> 
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="d-flex gap-2 align-content-center">
                    <div className="profile-pic">
                        <EditIcon />
                    </div>
                    <div className="mx-2">
                        <p className='text-main-dark'>@Dittiopad</p>
                        <button className="btn btn-white btn-sm">
                            Edit Profile <EditIcon size={20} style={{marginLeft: '.5rem'}} />
                        </button>
                    </div>
                </div>
                <div className="connected-wallet text-center text-main-dark">
                    <Wallet2Icon size={18} className='mx-2' />
                    Metamask wallet connected
                </div>
                <p className="pink cursor-pointer text-center fw-normal disconnect-wallet-btn" onClick={disconnectWallet}>Disconnect Wallet</p>
                <span className="underline fw-bold cursor-pointer text-center text-main-dark" onClick={onClose}>Close</span>
            </div>
        </div>
    );
};

export default ProfileModal;
