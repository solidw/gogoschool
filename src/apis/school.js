import apiClient from './apiClient';
import offices, { matchInitialEachOffices } from 'src/lib/offices';

export const getSchoolList = local => {
  let statusCode = -1;
  let dataToReturn = [];
  const convertedLocal = matchInitialEachOffices[local];
  apiClient
    .get(`/school/${convertedLocal}`)
    .then(res => {
      dataToReturn = res.data;
    })
    .catch(e => console.log(e));
  return [statusCode, dataToReturn];
};
