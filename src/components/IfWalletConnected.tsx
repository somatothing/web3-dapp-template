interface IfWalletConnectedProps {
  connectButton?: React.ReactNode;
  children?: React.ReactNode;
}

const IfWalletConnected: React.FC<IfWalletConnectedProps> = ({
  connectButton,
  children,
}) => {
  const isConnected = true; // Replace with actual logic
  return isConnected ? <>{children}</> : <>{connectButton}</>;
};

export default IfWalletConnected;
