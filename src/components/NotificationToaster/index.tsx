import { Toaster } from "react-hot-toast";

const NotificationToaster = () => {
  return (
    <Toaster
      position="bottom-left"
      toastOptions={{
        duration: 5000,
        error: {
          style: {
            background: "#FF0000",
            color: "#FFF",
            maxWidth: "600px",
          },
          iconTheme: {
            primary: "#FF0000",
            secondary: "#FFF",
          },
        },
        success: {
          style: {
            background: "#3CC13B",
            color: "#FFF",
          },
          iconTheme: {
            primary: "#3CC13B",
            secondary: "#FFF",
          },
        },
      }}
    />
  );
};

export default NotificationToaster;
