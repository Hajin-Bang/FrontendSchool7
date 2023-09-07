import './ListRender.css'
//css파일을 만들면 import해서 연결해주어야 한다. 

const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

// function ListItem({data}) {
//     return <li className={data.visited?"visited":''}>{data.area}</li>
//     // data.visited의 값이 true일 때만 class명을 visited로 지정
// }


function ListRender() { 
    //ListRender라는 컴포넌트를 반환하는 파일을 새로 만듦 
    //=> index.js 파일에서 렌더링할 파일을 변경해줌 (import, <ListRender/>

    const areas = list.map((item) => {
        return (
            <li key={item.no} className={item.visited?"visited":''}>{item.area}</li>
            //map을 통한 반복적인 컴포넌트 렌더링
            //key={item.no}를 쓴 이유는? 리액트에서 key라는 프로퍼티를 사용하길 권장한다
            //=> map같은 메소드를 통해서 만들어진 리스트에는 key값이 필요하다
        )
    })
    // areas 안의 상황
    /* [<li className={item.visited?"visited":''}>{item.area}</li>
    <li className={item.visited?"visited":''}>{item.area}</li>
    <li className={item.visited?"visited":''}>{item.area}</li>
    <li className={item.visited?"visited":''}>{item.area}</li>] */



    return (
        <ul className="list-area">
            {/* <ListItem data={list[0]}/>
            <ListItem data={list[1]}/>
            <ListItem data={list[2]}/>
            <ListItem data={list[3]}/> */}
            {areas}
        </ul>
    )
}


export default ListRender;