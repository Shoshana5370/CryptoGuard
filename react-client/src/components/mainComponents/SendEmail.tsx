import { useAppDispatch, useAppSelector } from "@/hooks";
import { sendEmail } from "@/features/mail/mailSlice";
import SendMailDialog from "./SendMailDialog";
import { closeMailDialog } from "@/features/mail/mail";

const SendEmail = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.mailState);
  const { sending, error: sendError, success } = useAppSelector((state) => state.mailDialog);

  const handleSendMail = async (subject: string, messageBody: string) => {
    try {
      await dispatch(sendEmail({ subject, messageBody })).unwrap();
    } catch (err) {
      console.error("Failed to send email:", err);
    }
  };

  return (
    <SendMailDialog
      isOpen={isOpen}
      onClose={() => dispatch(closeMailDialog())}
      onSend={handleSendMail}
      sending={sending}
      sendError={sendError}
      success={success}
    />
  );
};

export default SendEmail;
