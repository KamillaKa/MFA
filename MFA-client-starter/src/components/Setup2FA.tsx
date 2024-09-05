import { Button } from './ui/button';

const Setup2FA = (props: { qrCodeUrl: string; switchForm: () => void }) => {
  const { qrCodeUrl, switchForm } = props;
  return (
    <div className="p-4">
      {
        // TODO: add image element with qrCodeUrl as src and a Button with switchForm function
      }
        <img src={qrCodeUrl} alt="QR Code" />
        <Button onClick={switchForm}>
          Click here when QR Code scanned
        </Button>
    </div>
  );
};

export default Setup2FA;
