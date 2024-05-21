import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
export const ToasterService = {
  success: (message) => {
    toast.success(message);
  },
  error: (message) => {
    toast.error(message);
  }
};
