import QRCode from "qrcode.react";

const WalletQRCode = ({ walletAddress }) => (
  <QRCode value={walletAddress} size={128} />
);

<WalletQRCode walletAddress="0xYourWalletAddress" />;
