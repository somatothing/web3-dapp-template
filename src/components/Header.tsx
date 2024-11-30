import React, { FC, Suspense, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PropsWithClassName, cn } from "../utils";
import metaAggregator from "../utils/metaAggregator";
import styles from "./Header.module.css";

const Header: FC<PropsWithClassName<{}>> = ({ className }) => {
  const [ConnectWallet, setConnectWallet] = useState<React.FC | null>(null);
  const [IfWalletConnected, setIfWalletConnected] = useState<React.FC | null>(
    null
  );
  const [NotificationsIndicator, setNotificationsIndicator] = useState<
    React.FC | null
  >(null);
  const [Logo, setLogo] = useState<React.FC | null>(null);

  useEffect(() => {
    const loadComponents = async () => {
      try {
        setConnectWallet(await metaAggregator.execute("../components", "ConnectWallet"));
        setIfWalletConnected(await metaAggregator.execute("../components", "IfWalletConnected"));
        setNotificationsIndicator(await metaAggregator.execute("../components", "NotificationsIndicator"));
        setLogo(await metaAggregator.execute("../components", "Logo"));
      } catch (error) {
        console.error("Error loading components:", error);
      }
    };

    loadComponents();
  }, []);

  return (
    <header
      role="banner"
      className={cn(
        "w-screen z-10 flex-0 bg-background flex flex-row place-content-between items-center px-2",
        className
      )}
    >
      <Link to="/" aria-label="Go to homepage" className="no-anchor-hover-styles clickable">
        <span className={styles.logo_container}>
          <Suspense fallback={<span>Loading Logo...</span>}>
            {Logo && <Logo />}
          </Suspense>
        </span>
      </Link>
      <div className="flex flex-row justify-end items-center">
        <Suspense fallback={<span>Loading Notifications...</span>}>
          {IfWalletConnected && NotificationsIndicator && (
            <IfWalletConnected connectButton={<span>Connect</span>}>
              <NotificationsIndicator />
            </IfWalletConnected>
          )}
        </Suspense>
        <div className="ml-6">
          <Suspense fallback={<span>Loading Wallet...</span>}>
            {ConnectWallet && <ConnectWallet />}
          </Suspense>
        </div>
      </div>
    </header>
  );
};

export default Header;
