import { useState, useEffect } from 'react';
import config from '../config';

export const useGlobalDebug = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const originalConsole = {
      log: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error,
    };

    // Simulate async loading of config (if needed)
    const applyDebugConfig = () => {
      const debugOn = config.debug === 'true';

      if (!debugOn) {
        console.log = function () {}; // Suppress log
        console.info = function () {}; // Suppress info
        console.warn = function () {}; // Suppress warn
        console.error = function () {}; // Suppress error
      } else {
        // Restore original console methods
        console.log = originalConsole.log;
        console.info = originalConsole.info;
        console.warn = originalConsole.warn;
        console.error = originalConsole.error;
      }

      setIsLoading(false); // Mark as loaded
    };

    applyDebugConfig();

    // Cleanup on unmount
    return () => {
      console.log = originalConsole.log;
      console.info = originalConsole.info;
      console.warn = originalConsole.warn;
      console.error = originalConsole.error;
    };
  }, []);

  return isLoading;
};