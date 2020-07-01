import apiClient from './apiClient';
import axios from 'axios';

export const getUserInfoByCode = async code => {
  let statusCode = -1;
  let dataToReturn = {};
  try {
    console.log('@getUserInfoByCode hited');
    const res = await apiClient.get(`/user/student/${code}`);
    const data = res.data[0];
    statusCode = res.status;
    dataToReturn = {
      school: data.schoolName,
      grade: data.studentGrade,
      classNo: data.studentClass,
      number: data.studentNumber,
      name: data.name,
    };
  } catch (err) {
    console.log(JSON.stringify(err));
    statusCode = err.response;
  }

  return [statusCode, dataToReturn];
};

export const postRegisterData = async ({
  isStudent,
  name,
  code,
  schoolCode,
  grade,
  classNo,
  number,
  token = '',
}) => {
  let statusCode = -1;
  const formToRegister = {
    name: name,
    code: code,
    school_code: schoolCode,
    grade: grade,
    class: classNo,
    ...(isStudent ? { number: number } : { token: token }),
  };

  try {
    await apiClient.post(
      `/auth/login/${isStudent ? 'student' : 'teacher'}`,
      formToRegister,
    );
  } catch (err) {
    if (err.message === 'Request failed with status code 404') {
      statusCode = 404;
    }
  }
  return statusCode;
};

export const postStudentTemperature = async ({
  code,
  studentCode,
  temperature,
}) => {
  let statusCode = -1;

  try {
    const data = await apiClient.post('/temperature', {
      code: code,
      student: studentCode,
      temperature: temperature,
    });
    statusCode = data.status;
  } catch (err) {
    console.log(JSON.stringify(err, null, 4));
    if (err.message === 'Request failed with status code 404') {
      statusCode = 404;
    }
  }

  return statusCode;
};

export const postSelfCheckSubmit = async ({ code }) => {
  let statusCode = -1;
  try {
    const data = await apiClient.post('/selfcheck', {
      code: code,
      selfcheck: 1,
    });
    statusCode = data.status;
    console.log(`@postSelfCheckSubmit Success: ${statusCode}`);
  } catch (err) {
    console.log(`@postSelfCheckSubmit Error: ${JSON.stringify(err, null, 2)}`);
    if (err.message === 'Request failed with status code 404') {
      statusCode = 404;
    }
  }
  return statusCode;
};

export const putAcceptStudent = async ({ teacherCode, studentCode }) => {
  let statusCode = -1;
  try {
    const data = await apiClient.put(`/students/${studentCode}`, {
      code: teacherCode,
    });
    statusCode = data.status;
    console.log(`@putAcceptStudent Success: ${statusCode}`);
  } catch (err) {
    console.log(`@putAcceptStudent Error: ${JSON.stringify(err, null, 2)}`);
    if (err.message === 'Request failed with status code 404') {
      statusCode = 404;
    }
  }
  return statusCode;
};

export const getStudentDoesSelfcheckOrNot = async ({ teacherCode }) => {
  let statusCode = -1;
  let dataToReturn = {};
  try {
    console.log(teacherCode);
    const res = await apiClient.get(`/selfcheck/${teacherCode}`);
    statusCode = res.status;
    const data = res.data;
    console.log(res);
    dataToReturn = {
      total: data.total,
      checked: data.checked,
      notChcked: data.not_checked,
      studentList: data.student_list,
    };
    console.log(`@getStudentDoesSelfcheckOrNot Success: ${statusCode}`);
  } catch (err) {
    console.log(
      `@getStudentDoesSelfcheckOrNot Error: ${JSON.stringify(err, null, 2)}`,
    );
    if (err.message === 'Request failed with status code 404') {
      statusCode = 404;
    }
  }

  return [statusCode, dataToReturn];
};
