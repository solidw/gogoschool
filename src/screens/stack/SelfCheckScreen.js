import React, { useContext } from 'react';
import CustomWebView from 'src/components/CustomWebView';
import { UserContext } from 'src/contexts/UserContext';

const SelfCheckScreen = ({ route }) => {
  const { isStudent, name, code } = route.params;

  const JsCode = `
    document.getElementById('pName').value="${name}";
    document.getElementById('qstnCrtfcNo').value="${code}";
    document.getElementById('btnConfirm').click();
  `;

  const teacherJsCode = `
      document.getElementById('srchGrade').value = 4;
      const classCode = document.getElementById('srchClassCode');
      classCode.value = classCode[1].value;
      document.getElementById('btnDtlSearch').click();
    `;

  return (
    <CustomWebView
      uri={'https://eduro.dge.go.kr/stv_cvd_co00_010.do'}
      javaScriptEnabledAndroid={true}
      injectedJavaScript={JsCode}
      scalesPageToFit={false}
      scrollEnabled
    />
  );
};

export default SelfCheckScreen;
