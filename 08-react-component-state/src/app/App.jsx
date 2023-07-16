import styles from "./App.module.css";
import { ScrollButton, DescriptionList } from "@/components";
import { useState } from "react";

// const imageType = 'react';

// const isShowReactImage = true;

const handleScrollMove = ({ currentTarget, target }) => {
  const { top } = currentTarget.getBoundingClientRect();
  const appElement = document.getElementById("root")?.firstElementChild;

  if (target.matches('[title="스크롤 다운"]')) {
    appElement.scroll({
      top,
      behavior: "smooth",
    });
  }
  if (target.matches('[title="스크롤 업"]')) {
    appElement.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
};

// ---------------------------------------------------------
// 선언형 프로그래밍
// ---------------------------------------------------------
// 상태 선언
// 상태 업데이트
// React 재조정 알고리즘 (변경 감지)
// 컴포넌트 다시 렌더링 (하위에 포함된 컴포넌트 모두 다시 렌더링 : 성능 저하)

function App() {
  const [imageType, setImageType] = useState("react");
  const [isShowReactImage, setIsShowReactImage] = useState(true);

  const [descKey, setDescKey] = useState(9);
  // const [statusMessage] /* read-only */ = useState([
  //   "⌛️ 대기",
  //   "⏳ 로딩 중...",
  //   "✅ 로딩 성공!",
  //   "❌ 로딩 실패.",
  // ]);
  const [statusMessage, setStatusMessage] /* read-write */ = useState([
    "⌛️ 대기",
    "⏳ 로딩 중...",
    "✅ 로딩 성공!",
    "❌ 로딩 실패.",
  ]);

  const handleAddStatusMessage = (newStatusMessage) => {
    setStatusMessage([newStatusMessage, ...statusMessage]);
  };

  const handleDeleteStatusMessage = (deleteIndex) => {
    console.log(deleteIndex);
    setStatusMessage(statusMessage.filter((_, i) => i !== deleteIndex));
  };

  const renderList = ({ isReverse = false } = {}) => {
    const data = !isReverse ? statusMessage : [...statusMessage].reverse();
    return data.map((message, index) => (
      <li key={index}>
        {message}
        <button
          onClick={() => {
            console.log(index);
            handleDeleteStatusMessage(
              !isReverse ? index : data.length - (index + 1)
            );
          }}
        >
          delete
        </button>
      </li>
    ));
  };

  const [reactLibrary, setReactLibrary] = useState({
    name: "React",
    author: "조던 워케(Jordan Walke)",
    writtenIn: "JavaScript",
    type: "JavaScript 라이브러리",
    license: "MIT",
  });
  const handleUpdateReactLibrary = (newReactLibrary) => {
    setReactLibrary(newReactLibrary);
  };
  return (
    <div className={styles.container}>
      <h1>React 컴포넌트 상태 관리</h1>
      <div
        style={{
          display: "flex",
          columnGap: 8,
        }}
      >
        <button
          type="button"
          onClick={() => {
            const newDescKey = descKey + 3;
            setDescKey(newDescKey);
          }}
        >
          reload DescriptionList component
        </button>
        <button
          type="button"
          onClick={() => {
            setIsShowReactImage(!isShowReactImage);
          }}
        >
          {isShowReactImage ? "리액트 이미지 감춤" : "리액트 이미지 표시"}
        </button>
        <button
          type="button"
          onClickCapture={() => {
            // DOM 요소 접근/조작
            // 사이드 이펙트 처리
            // 선언된 상태 업데이트 → UI re-rendering
            setImageType(imageType === "react" ? "vite" : "react");
          }}
        >
          상태 메시지 변경
        </button>
      </div>
      <hr />
      <DescriptionList
        key={descKey}
        {...{
          statusMessage,
          onAddStatusMessage: handleAddStatusMessage,
          onUpdateReactLibrary: handleUpdateReactLibrary,
          imageType,
          isShowReactImage,
          renderList,
          reactLibrary,
        }}
      />
      <ScrollButton.Group onScroll={handleScrollMove}>
        <ScrollButton />
        <ScrollButton mode="up" />
      </ScrollButton.Group>
    </div>
  );
}

export default App;
