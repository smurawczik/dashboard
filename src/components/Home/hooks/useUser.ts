import { useEffect, useRef, useState } from "react";

export const useUser = (userId: string) => {
  const userIdRef = useRef(userId);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (userIdRef.current !== userId) {
        return;
      }

      setLoading(false);
    }, Math.random() * 5000);
  }, [userId]);

  return {
    loading,
  };
};
