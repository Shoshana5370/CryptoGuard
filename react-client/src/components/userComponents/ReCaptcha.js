import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
const ReCaptcha = ({ onVerify }) => {
    const recaptchaRef = useRef(null);
    const handleChange = (token) => {
        onVerify(token);
    };
    return (_jsx("div", { children: _jsx(ReCAPTCHA, { sitekey: String(import.meta.env.VITE_RECAPTCHA_SITE_KEY), ref: recaptchaRef, onChange: handleChange }) }));
};
export default ReCaptcha;
