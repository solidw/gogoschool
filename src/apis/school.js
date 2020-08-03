import apiClient from './apiClient';
import { matchInitialEachOffices } from 'src/lib/offices';

export const getSchoolList = async local => {
  let statusCode = -1;
  let dataToReturn = [];
  const convertedLocal = matchInitialEachOffices[local];
  try {
    const res = await apiClient.get(`/school/${convertedLocal}`);
    dataToReturn = res.data;
  } catch (err) {
    console.log(`getSChoolList: ${err}`);
    statusCode = err.toString().split('code ')[1];
  }
  return [statusCode, dataToReturn];
};
