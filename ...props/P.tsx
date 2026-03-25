import type { FC, PropsWithChildren } from 'react';

export type PProps = {}
const P: FC<PropsWithChildren<PProps>> = ({ children, ...props }) => {
    return <p {...props}>{children}</p>
}
export default P;

/*
React에서 props는 'properties'의 줄임말로, 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용하는 읽기 전용 객체를 의미합니다. 

마치 함수의 '인자(arguments)'처럼 작동하며, 컴포넌트의 외형이나 동작을 결정하는 설정값 역할을 합니다. 

1. 주요 특징
단방향 데이터 흐름: 데이터는 항상 부모에서 자식으로만 흐릅니다.
불변성 (Immutable): 자식 컴포넌트는 받은 props를 직접 수정할 수 없습니다. 값을 바꾸려면 부모가 새로운 props를 내려줘야 합니다.
다양한 타입: 문자열, 숫자뿐만 아니라 객체, 배열, 심지어 함수나 다른 컴포넌트도 전달할 수 있습니다. 

2. 사용 예시
javascript
// 부모 컴포넌트
function App() {
  return <Welcome name="철수" />; // 'name'이라는 prop을 전달
}

// 자식 컴포넌트
function Welcome(props) {
  return <h1>안녕하세요, {props.name}님!</h1>; // 받은 데이터를 사용
}
코드를 사용할 때는 주의가 필요합니다.

3. props와 state의 차이
구분 	props	state
관리 주체	부모 컴포넌트	컴포넌트 자신
수정 가능 여부	읽기 전용 (수정 불가)	수정 가능 (setState 사용)
용도	컴포넌트 간 데이터 전달	컴포넌트 내부의 동적 데이터 관리

React에서 ...를 사용하는 이유는 자바스크립트의 스프레드 연산자(Spread Operator)를 활용해 여러 개의 데이터를 한꺼번에 편리하게 다루기 위해서입니다. 
크게 두 가지 상황에서 주로 사용됩니다.

1. 부모가 자식에게 props를 전달할 때 (Spread Attributes) 
객체에 담긴 여러 속성을 자식 컴포넌트에 일일이 하나씩 적지 않고, 한 번에 풀어서 전달하고 싶을 때 사용합니다. 

일반적인 방식: 속성이 많아질수록 코드가 길어집니다.
javascript
<Profile name={user.name} age={user.age} job={user.job} />
코드를 사용할 때는 주의가 필요합니다.

스프레드 연산자 사용: 객체의 모든 내용을 자동으로 전달합니다.
javascript
<Profile {...user} />
코드를 사용할 때는 주의가 필요합니다.

 
2. 자식이 props를 받을 때 (Rest Parameter)
자식 컴포넌트에서 특정 데이터만 따로 빼서 쓰고, 나머지는 그대로 다른 요소에 넘겨주고 싶을 때 유용합니다. 

javascript
function Button({ label, color, ...others }) {
  // label과 color만 직접 사용하고, 
  // 나머지(onClick, className 등)는 others 객체에 모아서 button 태그에 전달
  return (
    <button style={{ backgroundColor: color }} {...others}>
      {label}
    </button>
  );
}
코드를 사용할 때는 주의가 필요합니다.

요약하자면
코드 단축: 수많은 props를 일일이 타이핑하는 수고를 덜어줍니다.
유연성: 어떤 props가 들어올지 미리 다 알 수 없는 경우에도 모든 데이터를 안전하게 전달할 수 있습니다.
가독성: 공통 속성을 하위 요소로 그대로 "토스"할 때 코드가 매우 깔끔해집니다. 
