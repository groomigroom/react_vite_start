export default function App() {
  const texts = ['hello', 'world'].map((text, index) =>
    <p key={index} children={text}></p>)

  return <div children={texts} />
}

/*
React의 children은 컴포넌트 태그 사이에 위치한 내용을 자식 컴포넌트로 전달하는 특별한 prop입니다. {props.children}을 사용하여 컴포넌트 레이아웃(틀)을 정의하고, 내부에 가변적인 UI 요소를 배치할 때 사용합니다. 코드 재사용성과 컴포넌트 합성(Composition)을 위해 필수적인 문법입니다. 
kakaoent.com
kakaoent.com
 +1
핵심 문법 및 사용법
기본 구조: props 객체의 children 속성을 구조 분해 할당(Destructuring)하여 가져옵니다.
컴포넌트 정의:
jsx
function Layout({ children }) {
  return <div className="container">{children}</div>; // 부모 내부에서 자식 렌더링
}
컴포넌트 사용:
jsx
function App() {
  return (
    <Layout>
      <h1>제목</h1> {/* 이 부분이 {children}으로 전달됨 */}
      <p>내용</p>
    </Layout>
  );
}
 
주요 특징 및 주의사항
다양한 타입: children은 JSX 엘리먼트뿐만 아니라 문자열, 숫자, 배열, 또는 함수(Render Props)일 수도 있습니다.
React.Children API: children이 배열인지 객체인지 불확실할 때, .map(), .forEach(), .count(), .toArray() 등의 메서드를 사용하여 안전하게 조작할 수 있습니다.
주의: props.children을 변형(조작)하는 것은 코드 가독성을 떨어뜨릴 수 있어 꼭 필요한 경우가 아니면 사용을 지양합니다. 
*/
