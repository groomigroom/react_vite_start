interface PropsInterface {
  //interface는 TypeScript의 기능으로, 컴포넌트의 Props나 State가 가져야 할 데이터의 구조(규격)를 정의하는 역할을 합니다. 이를 통해 데이터 타입을 명확히 하고, 컴포넌트 간의 데이터 흐름을 안전하게 관리합니다.💡 주요 핵심 역할Props 및 State 타입 정의: 컴포넌트가 부모로부터 어떤 데이터를 전달받아야 하는지(Props), 내부적으로 어떤 데이터를 상태로 갖는지(State) 구조를 명시합니다.자동 완성 및 에러 방지: IDE(코드 편집기)에서 Props의 속성을 자동 완성해주며, 정의되지 않은 속성을 사용하거나 필수 속성을 누락하면 컴파일 에러를 발생시켜 버그를 사전에 방지합니다.
  size: string;
  style?: React.CSSProperties;
  //React.CSSProperties는 TypeScript에서 React 컴포넌트의 style 객체나 CSS 속성을 정의할 때 사용하는 CSS 속성 타입(Type)입니다.
}

function Props({ size, style }: PropsInterface) {
  //inline 타입 정의하는 방식
  return (
    <div style={{ width: size, height: size, backgroundColor: "#333333", ...style }}></div>
  );
}

function Item ({ name, isPacked }: { name: string; isPacked: boolean}) {
  return <p className="item">{name}</p>;
}

function App() {
  return (
    <div>
      <Props size="100px" />
      <Props size="300px" style={{borderRadius: "120px"}} />
      <p>공부합시다.</p>
      <Item isPacked={true} name="김구름" />
    </div>
  );
}

export default App;


/*
React에서 interface는 TypeScript와 함께 사용되며, 컴포넌트의 props나 객체의 데이터 구조(Type)를 명확하게 정의할 때 사용합니다. 코드의 안정성을 높이고 자동 완성 기능을 원활하게 만들어 줍니다.기본적인 사용법은 다음과 같습니다.1. 기본 문법 (Props 타입 정의)컴포넌트로 전달되는 props의 형태를 객체 형태로 정의합니다.typescript// 1. interface 정의
interface UserProps {
  name: string;
  age: number;
  isLogin: boolean;
  nickname?: string; // 물음표(?)는 필수가 아닌 선택적(Optional) 속성
}

// 2. 컴포넌트에 적용
function UserProfile({ name, age, isLogin, nickname }: UserProps) {
  return (
    <div>
      <h3>{name}님 환영합니다.</h3>
      <p>나이: {age}</p>
    </div>
  );
}
코드를 사용할 때는 주의가 필요합니다.2. State (상태) 타입 정의useState를 사용할 때 초기값의 형태가 복잡하거나 객체일 경우 인터페이스를 지정할 수 있습니다.typescriptimport { useState } from "react";

interface UserInfo {
  email: string;
  phone: string;
}

function UserSettings() {
  // useState에 제네릭(<>)으로 interface 전달
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "test@example.com",
    phone: "010-0000-0000"
  });

  ...
}
코드를 사용할 때는 주의가 필요합니다.3. 상속(확장) 및 결합기존에 정의해둔 interface를 확장하거나 조합하여 사용할 수 있습니다 (extends 사용).typescriptinterface UserProfile {
  name: string;
  age: number;
}

// UserProfile의 속성을 모두 포함하고 grade가 추가됨
interface VIPUser extends UserProfile {
  grade: "VIP" | "VVIP";
}
코드를 사용할 때는 주의가 필요합니다.💡 interface vs type 차이점interface: 주로 객체(Object)의 구조를 정의할 때 사용하며, 동일한 이름으로 선언하면 자동으로 합쳐지는(Declaration Merging) 특징이 있습니다.type: 객체뿐만 아니라 원시 값, 유니언(|), 튜플 등 다양한 타입을 정의할 수 있습니다.더 자세한 컴포넌트 타이핑 방법은 React 공식 문서의 TypeScript 가이드를 참고하시기 바랍니다. 컴포넌트와 인터페이스의 구체적인 활용법은 velog 한치노님 블로그에서 더 많은 예시를 확인할 수 있습니다.
*/
