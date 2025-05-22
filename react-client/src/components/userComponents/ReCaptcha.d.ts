import React from 'react';
interface ReCaptchaProps {
    onVerify: (token: string | null) => void;
}
declare const ReCaptcha: React.FC<ReCaptchaProps>;
export default ReCaptcha;
