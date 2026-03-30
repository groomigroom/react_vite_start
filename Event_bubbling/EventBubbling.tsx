import type { SyntheticEvent } from 'react';

export default function EventBubbling() {
    const onDivClick = (e: SyntheticEvent) => {
        const { isTrusted, target, bubbles, currentTarget } = e
        console.log('click 이벤트가 <div>에서', isTrusted, target, bubbles, currentTarget)
    }
    const onButtonClick = (e: SyntheticEvent) => {
        const { isTrusted, target, bubbles } = e
        console.log('click 이벤트는 <button>에서', isTrusted, target, bubbles)
    }
    return (
        <div onClick={onDivClick}>
            <p>이벤트 버블링</p>
            <button onClick={onButtonClick}>클릭하세요</button>
        </div>
    )
}

/*
이벤트 버블링(Event Bubbling)은 한 마디로 "이벤트가 거품(Bubble)처럼 아래에서 위로 올라가는 현상"입니다.
1. 핵심 개념
HTML 구조에서 특정 요소에 이벤트(클릭 등)가 발생하면, 그 이벤트가 해당 요소에서 멈추지 않고 부모 요소들을 거쳐 최상위(window)까지 전달되는 과정을 말합니다.
2. 비유로 이해하기
중첩된 상자들을 상상해 보세요.
가장 안쪽 작은 상자(button)를 누르면, 그 상자를 감싸고 있는 큰 상자(div)도 눌린 것이나 다름없고, 결국 그 방(body) 전체에 영향을 주게 됩니다.
3. 왜 버블링이 일어날까?
효율성: 자식 요소마다 일일이 핸들러를 달지 않고, 공통 부모에서 한꺼번에 관리하기 위해서입니다. (이를 이벤트 위임이라고 합니다.)
자연스러운 흐름: 버튼을 누르는 행위는 결국 그 버튼이 포함된 영역 전체를 누르는 것과 같다는 논리입니다.
4. 멈추고 싶다면?
가끔 "나는 버튼만 누르고 싶지, 부모의 기능까지 실행하고 싶지 않아!" 할 때가 있습니다. 이때 코드에서 보셨던 e.stopPropagation()을 사용합니다.

제공해주신 코드는 React에서 이벤트 버블링(Event Bubbling)이 어떻게 동작하는지 확인하기 위한 예제입니다. 핵심 내용을 정리해 드릴게요.
1. 주요 동작 원리
이벤트 버블링: 사용자가 <button>을 클릭하면, 이벤트가 버튼에서 시작해 상위 요소인 <div>로 전달(전파)됩니다.
실행 순서: 버튼을 클릭하면 onButtonClick이 먼저 실행되고, 이어서 부모인 onDivClick이 실행됩니다. 
2. 코드 내 속성 의미
로그에 찍히는 값들은 이벤트의 상태를 보여줍니다.
isTrusted: 브라우저 액션에 의해 발생했는지(true), 스크립트로 발생했는지(false) 나타냅니다.
target: 실제 클릭이 일어난 가장 안쪽의 요소 (여기서는 <button>).
currentTarget: 이벤트 핸들러가 실제로 연결된 요소 (부모인 <div>에서 로그를 찍으면 <div>가 출력됨).
bubbles: 이 이벤트가 상위로 전파되는 성질을 가졌는지 여부 (클릭은 기본적으로 true). 
3. 흐름 요약
버튼 클릭 시:
onButtonClick 실행 → 로그 출력
이벤트가 상위로 올라감
onDivClick 실행 → 로그 출력 (target은 여전히 버튼이지만 currentTarget은 div)
텍스트(<p>)나 빈 <div> 영역 클릭 시:
onDivClick만 실행됩니다.
만약 버튼을 눌렀을 때 부모 div의 이벤트가 실행되지 않게 하려면, onButtonClick 함수 안에 e.stopPropagation()을 추가하면 됩니다.
*/
