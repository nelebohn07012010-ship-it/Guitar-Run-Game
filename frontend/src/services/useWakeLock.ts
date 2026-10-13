
import { useEffect } from "react";

export function useWakeLock(isPlaying: boolean) {
  useEffect(() => {
    if (!isPlaying || !("wakeLock" in navigator)) {
      return;
    }

    let wakeLock: WakeLockSentinel | null = null;
    let cancelled = false;

    const requestWakeLock = async () => {
      try {
        const lock = await navigator.wakeLock.request("screen");

        if (cancelled) {
          await lock.release();
          return;
        }

        wakeLock = lock;
      } catch (error) {
        console.warn(
          "Bildschirm konnte nicht wach gehalten werden:",
          error
        );
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && !wakeLock) {
        void requestWakeLock();
      }
    };

    void requestWakeLock();

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      cancelled = true;

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      if (wakeLock && !wakeLock.released) {
        void wakeLock.release();
      }
    };
  }, [isPlaying]);
}
