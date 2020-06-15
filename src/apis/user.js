import apiClient from './apiClient';

export const getUserInfoByCode = async code => {
  let statusCode = -1;
  let dataToReturn = {};
  const res = await apiClient.get(`/user/student/${code}`);
  statusCode = res.status;
  if (statusCode === 200) {
    const data = res.data[0];
    dataToReturn = {
      school: data.schoolName,
      grade: data.studentGrade,
      classNo: data.studentClass,
      number: data.studentNumber,
      name: data.name,
    };
  }

  return [statusCode, dataToReturn];
};

export const PostStudentTemperature = async ({
  code,
  student,
  temperature,
}) => {
  let statusCode = -1;
  let dataToReturn = {};
  const res = await apiClient.post('/temperature', {
    code: code,
    student: student,
    temperature: temperature,
  });
  statusCode = res.status;
  dataToReturn = res.data;
  return [statusCode, dataToReturn];
};
