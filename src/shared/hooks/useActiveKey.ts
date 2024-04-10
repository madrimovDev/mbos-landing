import { useEffect, useState } from "react";

export const useActiveKey = (defaultActiveKey?: string) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || undefined);

  const changeActiveKey = (key: string) => setActiveKey(key);

  useEffect(() => {
    if (typeof window !== "undefined") {
			const hash = window.location.hash;
      changeActiveKey(hash ? hash.substring(1) : defaultActiveKey || "");
    }
  }, [defaultActiveKey]);

  return [activeKey, changeActiveKey] as const;

};

