import React from "react";

const arr = [1,2,3,4,5,6];

function ReactFragment() {
    const myArr = arr.map((item) => {
        return (
            <React.Fragment key={item}>
                <dt>숫자</dt>
                <dd>{item}</dd>
            </React.Fragment>
        )
    });

    return (
        <>
        {/* Reac.Fragment의 축약형 속성 <></>
        <React.Fragment> 라고 쓰려면 맨 위에서 improt React from 'react'를 통해 모듈을 추가해주어야 한다.
        축약형 속성에서는 스타일과 관련된 속성을 쓰는 것이 불가능  */}
            <h1>hello</h1>
            <h2>라이캣!!</h2>
            <dl>
                {myArr}
            </dl>
            <ItemList/>
        </>
    );
}


//실습

const items = [
    { id: 1, name: 'Apple', desc: '빨간건 사과' },
    { id: 2, name: 'Banana', desc: '바나나는 길어' },
    { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function ItemList () {
    const itemsList = items.map((item) => {
        //(id, name, desc)라고 작성한 뒤 {id}, {name}, {desc}로 사용할 수 있다다
        return (
            <React.Fragment key={item.id}>
                <dt>{item.name}</dt>
                <dd>{item.desc}</dd>
            </React.Fragment>
        )
    });

    return (
        <React.Fragment>
            <dl>
                {itemsList}
            </dl>
            <ItemList/>
        </React.Fragment>
    )
}

export default ReactFragment;