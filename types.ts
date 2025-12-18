export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
