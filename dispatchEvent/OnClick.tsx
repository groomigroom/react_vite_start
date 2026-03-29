export default function DispatchEvent() {
    const onCallDispatchEvent = () => {
        console.log('onCallDispatchEvent');
        document.getElementById('root')?.dispatchEvent(new Event('click', { bubbles: true }))
    };


    const onCallClick = () => {
        console.log('onCallClick');
        document.getElementById('root')?.click();
    };


    return (
        <div>
            <p>DispatchEvent</p>
            <button onClick={onCallDispatchEvent}>call dispatchEvent</button>
            <button onClick={onCallClick}>call click~!~!</button>
        </div>
    );
};

/*

1. 주요 함수 해석
onCallDispatchEvent:
dispatchEvent라는 표준 DOM 메서드를 사용합니다.
새로운 click 이벤트 객체를 생성하여 root 요소에 전달합니다.
{ bubbles: true } 옵션을 주어, 이벤트가 상위 요소로 전파되도록 설정했습니다. 이 방식은 상세한 이벤트 커스텀(상세 옵션 설정)이 필요할 때 주로 사용합니다.
onCallClick:
DOM 요소의 내장 메서드인 .click()을 직접 호출합니다.
사용자가 실제로 버튼을 누른 것과 가장 유사하게 동작하며, 코드가 더 간결합니다.
2. 코드의 흐름
화면에는 두 개의 버튼이 나타납니다.
첫 번째 버튼을 누르면 콘솔에 로그를 찍고, ID가 root인 엘리먼트에 수동으로 생성한 클릭 이벤트를 보냅니다.
두 번째 버튼을 누르면 콘솔에 로그를 찍고, root 엘리먼트의 클릭 함수를 직접 실행합니다.
3. 참고 및 주의사항
직접적인 DOM 조작: React는 보통 Ref를 사용해 DOM에 접근하는 것을 권장하지만, 이 코드는 document.getElementById를 사용해 직접 접근하고 있습니다. 이는 React의 선언적 방식보다는 전통적인 JavaScript 방식에 가깝습니다.
Optional Chaining (?.): getElementById('root')가 null일 경우를 대비해 에러가 나지 않도록 처리되어 있습니다.
이 코드를 통해 특정 상황에서 UI 외부나 상위 요소에 이벤트를 강제로 발생시키는 방법을 테스트하려는 것으로 보입니다.

dispatchEvent는 프로그래밍 방식으로 특정 요소에 이벤트를 강제로 발생(발송)시키는 메서드입니다. 

단어 그대로 해석하면 '이벤트를 보내다(dispatch)'라는 뜻으로, 사용자가 실제로 마우스를 클릭하지 않아도 코드를 통해 "지금 이 버튼이 클릭되었다!"라고 브라우저에 신호를 보내는 역할을 합니다. 

주요 특징과 의미는 다음과 같습니다:
1. 수동 이벤트 트리거 (Manual Trigger) 
일반적으로 이벤트는 사용자의 행동(클릭, 키보드 입력 등)에 의해 발생하지만, dispatchEvent를 사용하면 개발자가 원하는 시점에 이벤트를 인위적으로 실행할 수 있습니다. 

2. 상세한 제어 가능 
단순히 함수를 실행하는 .click()과 달리, dispatchEvent는 이벤트 객체를 직접 생성하여 세부 설정을 부여할 수 있습니다. 
버블링 제어: { bubbles: true } 설정을 통해 이벤트가 부모 요소로 전파될지 결정할 수 있습니다.
취소 가능 여부: cancelable 옵션으로 preventDefault()가 작동할지 여부를 설정할 수 있습니다. 

3. 커스텀 이벤트 지원
브라우저 표준 이벤트(click, submit 등)뿐만 아니라, 개발자가 직접 정의한 나만의 이벤트(예: 'login-success', 'update-data')를 만들어 전파할 때 필수적으로 사용됩니다. 

.click() vs dispatchEvent 차이 요약
구분 	.click()	                               dispatchEvent(new Event('click'))
성격	HTML 요소의 내장 편의 메서드	표준 DOM 이벤트 발송 API
유연성	클릭 이벤트만 발생시킴	모든 종류의 표준/커스텀 이벤트 가능
세부 설정	기본 설정으로만 동작함	버블링, 데이터 전달 등 상세 설정 가능
결론적으로, 작성하신 코드에서 dispatchEvent를 쓴 이유는 단순히 클릭 함수를 실행하는 것을 넘어, 이벤트가 상위 요소(root)로 퍼져나가는(bubbles) 과정까지 시뮬레이션하거나 테스트하기 위함으로 해석됩니다.

*/
