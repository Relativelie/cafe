import Modal from 'react-modal';
import { useTheme } from 'theme/themeProvider';

const STYLES: Modal.Styles = {
  content: {
    overflow: 'scroll',
    height: '60%',
    width: '60%',
    top: '25%',
    left: '25%',
  },
};

const MOBILE_STILES: Modal.Styles = {
  content: {
    overflow: 'scroll',
  },
};

const OVERLAY = { zIndex: 40, backgroundColor: 'rgba(255, 255, 255, .3)' };

type AppModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isMobile?: boolean;
};

const AppModal: React.FC<AppModalProps> = ({ isOpen, onClose, children, isMobile = false }) => {
  const { theme } = useTheme();
  const styles = isMobile ? MOBILE_STILES : STYLES;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        ...styles,
        overlay: OVERLAY,
        content: { ...styles.content, background: theme.colors.default },
      }}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};

export default AppModal;
