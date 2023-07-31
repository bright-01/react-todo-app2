import {useState} from "react";

const initData = [
    '장보기', '공부하기'
];
export function TodoList() {
    const [todoList, setTodoList] = useState(initData);

    return (
        <div>
            {
                todoList.map( todo => {
                    return <li>{todo}</li>
                })
            }

        </div>
    )




}