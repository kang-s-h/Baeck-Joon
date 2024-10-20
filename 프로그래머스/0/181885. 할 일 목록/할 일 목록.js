function solution(todo_list, finished) {
    var answer = [];
    todo_list.map((todo,index)=> {
    if(!finished[index]){
        answer.push(todo);
    }
    })
    return answer;
}