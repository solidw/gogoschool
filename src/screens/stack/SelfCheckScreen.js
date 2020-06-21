import React, {
  useContext,
  useRef,
  forwardRef,
  useState,
  useEffect,
} from 'react';
import { UserContext } from 'src/contexts/UserContext';
import styled from 'styled-components';
import { WebView } from 'react-native-webview';
import AbsoluteIndicator from 'src/components/AbsoluteIndicator';
import { postSelfCheckSubmit } from 'src/apis/user';

const SelfCheckScreen = ({ route }) => {
  const { isStudent, name, code, directLink } = route.params;
  const webViewRef = useRef();
  const [isChecked, setChecked] = useState(false);

  const zoomJsCode = `
    const meta = document.createElement('meta'); 
    meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0');
    meta.setAttribute('name', 'viewport');
    document.getElementsByTagName('head')[0].appendChild(meta)
    `;

  const studentJsCode = `
    setTimeout(() => {
      document.getElementById("btnConfirm").addEventListener("click", function () {
        window.ReactNativeWebView.postMessage("Done!");
      });
      true;
    }, 100)
  `;

  const teacherJsCode = `
    document.getElementById('pName').value="${name}";
    document.getElementById('qstnCrtfcNo').value="${code}";
    document.getElementById('btnConfirm').click();
    document.getElementById('srchGrade').value = 4;
    const classCode = document.getElementById('srchClassCode');
    classCode.value = classCode[1].value;
    document.getElementById('btnDtlSearch').click();
  `;

  return (
    <CustomWebView
      uri={
        isStudent
          ? `https://eduro.dge.go.kr/stv_cvd_co00_000.do?k=${directLink}`
          : 'https://eduro.dge.go.kr/stv_cvd_co00_010.do'
      }
      javaScriptEnabledAndroid={true}
      ref={webViewRef}
      injectedJavaScript={isStudent ? studentJsCode : teacherJsCode}
      scalesPageToFit={false}
      scrollEnabled
      onMessage={e => {
        console.log(e.nativeEvent.data);
        if (e.nativeEvent.data === 'Done!') {
          console.log('Done! submit');
          postSelfCheckSubmit({ code: code });
        }
      }}
    />
  );
};

const CustomWebView = forwardRef(
  ({ uri, injectedJavaScript, onMessage }, ref) => {
    const [visible, setVisible] = useState(true);
    return (
      <CustomWebViewWrapper>
        <WebView
          source={{ uri }}
          onLoadStart={() => setVisible(true)}
          onLoad={() => setVisible(false)}
          injectedJavaScript={injectedJavaScript}
          javaScriptEnabledAndroid={true}
          ref={ref}
          scalesPageToFit={false}
          onMessage={onMessage}
          scrollEnabled
        />
        {visible && <AbsoluteIndicator size="large" />}
      </CustomWebViewWrapper>
    );
  },
);

const CustomWebViewWrapper = styled.View`
  flex: 1;
`;
export default SelfCheckScreen;
