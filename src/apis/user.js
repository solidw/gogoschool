import apiClient from './apiClient';

export const getUserInfoByCode = code => {
  let statusCode = -1;
  let dataToReturn = {};
  apiClient
    .get(`/user/student/${code}`)
    .then(res => {
      if (res.data != null) {
        const data = res.data[0];
        statusCode = res.status;
        dataToReturn = {
          school: data.schoolName,
          grade: data.studentGrade,
          classNo: data.studentClass,
          number: data.studentNumber,
          name: data.name,
        };
      }
    })
    .catch(e => {
      console.log(JSON.stringify(e, null, 4));
      statusCode = e.response;
    });

  return [statusCode, dataToReturn];
};

export const PostRegisterData = ({
  isStudent,
  name,
  code,
  schoolCode,
  grade,
  classNo,
  number,
  token = '',
}) => {
  const formToRegister = {
    name: name,
    code: code,
    school_code: schoolCode,
    grade: grade,
    class: classNo,
    ...(isStudent ? { number: number } : { token: token }),
  };

  console.log(formToRegister);
  // apiClient.post(`/auth/login/${isStudent ? 'student' : 'teacher'}`,
  // {

  // });
};

export const PostStudentTemperature = ({ code, student, temperature }) => {
  let statusCode = -1;
  let dataToReturn = {};
  apiClient
    .post('/temperature', {
      code: code,
      student: student,
      temperature: temperature,
    })
    .then(data => (dataToReturn = data))
    .catch(e => {
      console.log(JSON.stringify(e, null, 4));
      statusCode = e.status;
    });
  return [statusCode, dataToReturn];
};
