const { ethers } = require('ethers');

exports.verifyPayment = async (req, res) => {
  const { txHash, from } = req.body;

  try {
    const provider = new ethers.providers.InfuraProvider('goerli', 'Your_Infura_Project_ID'); // Goerli testnet
    const tx = await provider.getTransaction(txHash);

    if (!tx) {
      return res.status(400).json({ message: 'Transaction not found' });
    }

    if (tx.to.toLowerCase() !== process.env.ADMIN_WALLET.toLowerCase()) {
      return res.status(400).json({ message: 'Incorrect recipient' });
    }

    if (tx.from.toLowerCase() !== from.toLowerCase()) {
      return res.status(400).json({ message: 'Sender mismatch' });
    }

    if (ethers.utils.formatEther(tx.value) !== '0.001') {
      return res.status(400).json({ message: 'Incorrect amount' });
    }

    return res.json({ message: 'Payment Verified!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Verification Failed' });
  }
};
