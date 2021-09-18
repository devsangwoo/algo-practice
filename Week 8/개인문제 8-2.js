// 2019 KAKAO BLIND RECRUITMENT :: 오픈채팅방



function printMessage( name, cmd){
    let result = "";
    cmd === "Enter" ? result = name + "님이 들어왔습니다."
                    : result = name + "님이 나갔습니다."
    return result;
}
function solution(record) {
    var answer = [];
    var dict = {};
    record.forEach( cmd => {
        cmd = cmd.split(' ')
        if( cmd[0] != "Leave"){
            dict[cmd[1]] = cmd[2]    
        }
    })
    record.forEach( ele => {
        ele = ele.split(' ')
        if( ele[0] != 'Change'){
            answer.push( printMessage(dict[ele[1]], ele[0] ) )
        }
    })
    return answer;
}
