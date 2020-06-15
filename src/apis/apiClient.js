import axios from 'axios';
import serverURL from 'src/lib/serverURL';

const apiClient = axios.create({
  baseURL: serverURL,
});

export default apiClient;
