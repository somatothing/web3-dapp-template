import React, { useEffect, useState } from "react";
import metaAggregator from "../utils/metaAggregator";

const FooterWrapper: React.FC = () => {
  const [Footer, setFooter] = useState<React.FC | null>(null);

  useEffect(() => {
    const loadFooter = async () => {
      const loadedFooter = await metaAggregator.execute("../components", "Footer");
      setFooter(() => loadedFooter);
    };
    loadFooter();
  }, []);

  return Footer ? <Footer /> : <div>Loading Footer...</div>;
};

export default FooterWrapper;
