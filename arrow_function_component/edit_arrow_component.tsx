import type {FC} from 'react';

export type ArrowComponentProps = {
    href: string
    text: string
}

const ArrowComponent: FC<ArrowComponentProps> = props => {
    const {href, text} = props
    return (
        <li>
            <a href={href}>
                <p>{text}</p>
            </a>
        </li>
    )
}

export default ArrowComponent

/*
함수형 컴포넌트(Functional Component)의 타입을 정의하는 FC(Function Component) 인터페이스만 명시적으로 가져오겠다는 의미입니다.
:은 타입을 지정한다는 의미.


typescript에서 타입 지정의 의미?


+8
타입스크립트에서 타입 지정(Type Annotation/Definition)은 변수, 함수, 객체 등 데이터에 명시적으로 형식을 선언하여 코드의 안정성을 높이고 컴파일 시점에 오류를 방지하는 기능입니다. 타입 명시는 'let 변수명: 타입 = 값' 형태로, 타입 정의는 type이나 interface 키워드로 데이터 구조를 엄격히 규정하여 가독성과 협업 효율을 극대화합니다. 
YouTube
YouTube
 +2
주요 특징 및 사용 예시:
기본 타입 지정: 변수에 string, number, boolean 등의 타입을 선언하여 다른 형식의 값 할당을 막습니다.
typescript
let name: string = "TypeScript";
let age: number = 20;
let isDone: boolean = false;
*/


