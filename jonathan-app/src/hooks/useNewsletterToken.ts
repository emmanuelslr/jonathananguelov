import { useCallback, useRef, useState } from "react";

type TokenResponse = {
  token: string;
  timestamp: number;
  signature: string;
  expiresIn: number;
};

type CachedToken = TokenResponse & { expiresAt: number };

export function useNewsletterToken() {
  const [token, setToken] = useState<CachedToken | null>(null);
  const pendingRequest = useRef<Promise<CachedToken> | null>(null);

  const fetchToken = useCallback(async () => {
    if (pendingRequest.current) {
      return pendingRequest.current;
    }

    const request = fetch("/api/newsletter/token", {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Unable to acquire security token");
        }
        const data = (await response.json()) as TokenResponse;
        const expiresAt = Date.now() + Math.max(0, data.expiresIn - 1000);
        const cached: CachedToken = { ...data, expiresAt };
        setToken(cached);
        return cached;
      })
      .finally(() => {
        pendingRequest.current = null;
      });

    pendingRequest.current = request;
    return request;
  }, []);

  const getValidToken = useCallback(async () => {
    if (token && token.expiresAt > Date.now()) {
      return token;
    }
    return fetchToken();
  }, [fetchToken, token]);

  const resetToken = useCallback(() => {
    setToken(null);
  }, []);

  return { getValidToken, resetToken };
}
