import type {SyntheticEvent} from 'react';

export default function ReactOnClick() {
    const onClick = (e: SyntheticEvent) => {
        const {isTrusted, target, bubbles} = e;
        console.log('마우스 클릭 <button>', isTrusted, target, bubbles);
    }
    return (
        <div>
            <p>ReactOnClick</p>
            <button onClick={onClick}>클릭하세요</button>
        </div>
    )
}
