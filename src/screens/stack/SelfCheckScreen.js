import React from 'react';
import { Platform } from 'react-native';
import CustomWebView from 'src/components/CustomWebView';

const SelfCheckScreen = () => {
  const isAndroid = Platform.OS === 'android';
  const studentJsCode = `
    document.getElementById('pName').value="강경준";
    document.getElementById('qstnCrtfcNo').value="THNR28";
    document.getElementById('btnConfirm').click();
  `;
  const teacherJsCode = `
      document.getElementById('pName').value="신민철";
      document.getElementById('qstnCrtfcNo').value="ANGX8U";
      document.getElementById('btnConfirm').click();

      document.getElementById('srchGrade').value = 4;
      const classCode = document.getElementById('srchClassCode');
      classCode.value = classCode[1].value;
      document.getElementById('btnDtlSearch').click();
    `;
  return (
    <CustomWebView
      uri={'https://eduro.dge.go.kr/stv_cvd_co00_010.do'}
      javaScriptEnabledAndroid={true}
      injectedJavaScript={teacherJsCode}
      scalesPageToFit={false}
      scrollEnabled
    />
  );
};

export default SelfCheckScreen;
