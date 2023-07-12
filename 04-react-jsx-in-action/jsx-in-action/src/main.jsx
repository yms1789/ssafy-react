import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App';

const rootElement = document.getElementById('root');
// StrictMode -> 컴파운드 컴포넌트, 개발하는 동안에 컴포넌트가 순수한지 유무를 테스트하는 목적

// [react에서 컴포넌트의 순수함을 확인하는 방법] (개발 모드에서만 활성)
// INPUT(props) -> COMPONENT -> OUTPUT(JSX) 
// INPUT(props) -> COMPONENT -> OUTPUT(JSX) (re-render)
// 위 두개의 결과가 동일해야 함
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
