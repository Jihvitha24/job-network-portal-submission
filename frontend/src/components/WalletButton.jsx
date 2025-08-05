import React, { useState } from 'react';
function WalletButton({ onPaymentSuccess }) {
  const [walletConnected, setWalletConnected] = useState(false);
  const connectWallet = () => { setWalletConnected(true); alert('Wallet Connected (Mock)'); };
  const makePayment = () => { alert('Payment Successful (Mock)'); if (onPaymentSuccess) onPaymentSuccess(); };
  return (<div><h2>Wallet Payment</h2><button onClick={connectWallet}>Connect Wallet</button>{walletConnected && <button onClick={makePayment}>Pay 0.001 ETH</button>}</div>);
}
export default WalletButton;
