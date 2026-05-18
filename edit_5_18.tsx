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
