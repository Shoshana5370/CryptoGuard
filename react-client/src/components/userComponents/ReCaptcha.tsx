import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'

interface ReCaptchaProps {
  onVerify: (token: string | null) => void;
}

const ReCaptcha: React.FC<ReCaptchaProps> = ({ onVerify }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const handleChange = (token: string | null) => {
    onVerify(token);
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey="6Le9JUMrAAAAAAT1rPMEur0u8bZf_h_05KXF2zjM"
        ref={recaptchaRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default ReCaptcha;
