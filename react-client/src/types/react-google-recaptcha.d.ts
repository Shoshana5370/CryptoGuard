// src/react-google-recaptcha.d.ts
declare module 'react-google-recaptcha' {
    import * as React from 'react';
  
    interface ReCAPTCHAProps {
      sitekey: string;
      onChange?: (token: string | null) => void;
      onExpired?: () => void;
      onErrored?: () => void;
      theme?: 'light' | 'dark';
      size?: 'compact' | 'normal' | 'invisible';
      tabindex?: number;
      badge?: 'bottomright' | 'bottomleft' | 'inline';
      hl?: string;
    }
  
    class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {}
    export default ReCAPTCHA;
  }
  