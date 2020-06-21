import apiClient from './apiClient';

export const getUserInfoByCode = async code => {
  let statusCode = -1;
  let dataToReturn = {};
  try {
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
  const formToRegister = {
    name: name,
    code: code,
    school_code: schoolCode,
    grade: grade,
    class: classNo,
    ...(isStudent ? { number: number } : { token: token }),
  };

  console.log(formToRegister);
  try {
    await apiClient.post(
      `/auth/login/${isStudent ? 'student' : 'teacher'}`,
      formToRegister,
    );
  } catch (err) {
    console.log(`@postRegisterData: ${err}`);
  }
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
    statusCode = err.status;
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
    statusCode = err.status;
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
    statusCode = err.status;
  }
  return statusCode;
};

export const getStudentDoesSelfcheckOrNot = async ({ teacherCode }) => {
  let statusCode = -1;
  let dataToReturn = {};
  try {
    const res = await apiClient.get(`/selfcheck/${teacherCode}`);
    console.log(teacherCode);
    statusCode = res.status;
    const data = res.data;
    console.log(data);
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
    statusCode = err.status;
  }

  return [statusCode, dataToReturn];
};
