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
    console.log(err);
    statusCode = 400;
  }
  return [statusCode, dataToReturn];
};
