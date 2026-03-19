import ReactDOM from 'react-dom/client'

const App = () => {
  const children = [4, 5, 7].map((n: number) => <h3>Hello World! {n}</h3>)
  const rootVirtualDOM = <div>{children}</div>



  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  root.render(rootVirtualDOM)

}

export default App


/*
React에서 map() 함수는 배열 데이터를 기반으로 반복되는 JSX 컴포넌트를 렌더링할 때 사용합니다. {array.map((item, index) => <Component key={index} data={item} />)} 형식을 사용하며, 각 항목에 고유한 key 프롭을 반드시 부여해야 성능과 UI 갱신이 효율적으로 이루어집니다. 
기본 문법 및 사용법
배열 생성: 렌더링할 데이터를 가진 배열을 생성합니다.
map() 사용: {} 중괄호 안에서 map() 함수를 호출하여 요소를 JSX로 변환합니다.
Key 부여: key 속성은 React가 어떤 항목을 변경, 추가 또는 삭제했는지 식별하는 데 도움을 줍니다. 
코드 예시
jsx
function App() {
  const users = ['Kim', 'Lee', 'Park'];

  return (
    <ul>
      {/* map() 함수를 사용하여 배열을 <li> 요소로 매핑 */}
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
*/
