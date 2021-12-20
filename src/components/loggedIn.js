
import { useNavigate } from 'react-router-dom'

export default function Auth() {
    const navigate = useNavigate();

        if (sessionStorage.length == 0) {
            return false;
        }
        else{
            return true

        }
  
        
}

