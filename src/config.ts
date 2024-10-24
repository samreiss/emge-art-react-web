// Extend the Window interface to include your custom property
interface CustomWindow extends Window {
    _env_?: {
      REACT_APP_LOGGING_ENABLED?: 'true' | 'false'
    }
  }
  
  // Define the configuration interface
  interface AppConfig {
    debug: 'true' | 'false'
  }
  
  // Type assertion to access the custom property
  const env = (window as CustomWindow)._env_
  
  // Create the configuration object
  const config: AppConfig = {
    debug: ((env && env.REACT_APP_LOGGING_ENABLED) as 'true' | 'false') || 'true',
  }
  
  export default config
  