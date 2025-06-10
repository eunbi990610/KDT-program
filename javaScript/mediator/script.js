class Paricipant{
    constructor(name){
        this.name = name;
        this.chatRoom = null;
        this.messages = [];
    }

    send(message, to){
        this.chatRoom.send(message,this,to);
    }
    receive(message, from){
        this.messages.push({message, from});
    }
    showMessage(){
        console.log(this.messages);
    }
}

class ChatRoom{ // 클래스 이름 맨 앞은 꼭 대문자
    constructor(){
        this.participants = {}
    }
    enter(participant){
        this.participants[participant.name] = participant;
        participant.chatRoom = this;
    }
    send(message,participant,to){
        this.participants[to.name].receive(message,participant);
    }
}

const chatRoom = new ChatRoom();
console.log(chatRoom);

const user1 = new Paricipant('user1');
const user2 = new Paricipant('user2');
const user3 = new Paricipant('user3');

chatRoom.enter(user1);
chatRoom.enter(user2);
chatRoom.enter(user3);
console.log(user1);

user1.send('hello',user2);
user1.send('hello',user3);
user1.showMessage();
user2.showMessage();
user3.showMessage();

console.log(chatRoom);
 