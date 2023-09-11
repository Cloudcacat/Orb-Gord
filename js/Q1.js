let action = 0;
let survival = 0;
let simulation = 0;
let horror = 0;
let shooting = 0;
let openWorld = 0;
let multiPlayer = 0;
let zero = 0;
let next = 0;
let i=0;

const Q = [
    {"no":1,"question":"คุณมีปัญหาการนอน นอนไม่หลับหรือนอนมาก",
    "choice":["แทบไม่มี","เป็นบางครั้ง","บ่อยครั้ง","เป็นประจำ"],"point":["shooting","survival","horror","zero"]},
    {"no":2,"question":"คุณมีสมาธิน้อยลง",
    "choice":["แทบไม่มี","เป็นบางครั้ง","บ่อยครั้ง","เป็นประจำ"],"point":["shooting","survival","horror","zero"]},
    {"no":3,"question":"คุณมีปัญหาหงุดหงิด/กระวนกระวาย/ว้าวุ่นใจ",
    "choice":["แทบไม่มี","เป็นบางครั้ง","บ่อยครั้ง","เป็นประจำ"],"point":["shooting","survival","horror","zero"]},
    {"no":4,"question":"คุณรู้สึกเบื่อ เซ็ง",
    "choice":["แทบไม่มี","เป็นบางครั้ง","บ่อยครั้ง","เป็นประจำ"],"point":["shooting","survival","horror","zero"]},
    {"no":5,"question":"คุณไม่อยากพบปะผู้คน",
    "choice":["แทบไม่มี","เป็นบางครั้ง","บ่อยครั้ง","เป็นประจำ"],"point":["shooting","survival","horror","zero"]},
    {"no":6,"question":"คุณทำภารกิจนี้สำเร็จ พ่อบ้านให้รางวัลกับคุณ นั่นก็คือ",
    "choice":["เปิดดูรางวัลของคุณ"],"point":["next"]}
]

function functionaction() {
    action ++;
    i++;
    questionMain(i)
    console.log("action : ",action);
    
}
function functionsurvival() {
    survival ++;
    i++;
    questionMain(i)
    console.log("survival : ",survival);
}
function functionsimulation() {
    simulation ++;
    i++;
    questionMain(i)
    console.log("simulation : ",simulation);
}
function functionhorror() {
    horror ++;
    i++;
    questionMain(i)
    console.log("horror : ",horror);
}
function functionshooting() {
    shooting ++;
    i++;
    questionMain(i)
    console.log("shooting : ",shooting);
}
function functionopenWorld() {
    openWorld ++;
    i++;
    questionMain(i)
    console.log("openWorld : ",openWorld);
}
function functionmultiPlayer() {
    multiPlayer ++;
    i++;
    questionMain(i)
    console.log("multiPlayer : ",multiPlayer);
}
function functionzero() {
    zero ++;
    i++;
    questionMain(i)
    console.log("zero : ",zero);
}

function questionMain(i) {
    const currentData = Q[i];
    const newListItem = document.createElement("li");
    newListItem.classList.add("box1");
    const choice_array = currentData.choice;
    const pointArray = currentData.point ;
    let choice_string = choice_array[0];
    if (i!==5) {
        if (choice_string.length > 1) {
            choice_string = '<button class="choice" onclick="function'+pointArray[0]+'()">'+choice_string+'</button>'
            for (let j = 1; j < choice_array.length; j++) {
                choice_string = choice_string+'<button class="choice" onclick="function'+pointArray[j]+'()">'+choice_array[j]+'</button>'
            }
        }
    } else {
        let number = [action,survival,simulation,horror,shooting,openWorld,multiPlayer] ;
        let type = ["action","survival","simulation","horror","shooting","openWorld","multiPlayer"] ;
        let maxNum = number[0] ;
        let k = 0 ;
        let name = "action";
        for(k = 1; k < number.length; k++) {
            if(number[k]>maxNum){
                maxNum = number[k] ;
                name = type[k] ;
            }
        }
        choice_string = '<img src="images/gift.png"></img><form action="'+name+'.html" target="_blank" method="get"> <div><button type="submit" class="choice">'+choice_array[0]+'</button></div></form>'
    }
    const html =
        '<div class="question" onclick="changeName(' + currentData.question +')"> ' + currentData.question + '</div>' +choice_string
    html.trim();
    newListItem.innerHTML = html;
    document.getElementById("list").appendChild(newListItem);
}

function functionnext() {
    const currentData = Q[5];
    const choice_array = currentData.choice; 
    let name = "";
    let number = [action,survival,simulation,horror,shooting,openWorld,multiPlayer] ;
    let type = ["action","survival","simulation","horror","shooting","openWorld","multiPlayer"] ;
    let maxNum = 0 ;
    for(let k = 0; k < number.length; k++) {
        if(number[k]>maxNum){
            maxNum = number[k] ;
            name = type[k] ;
        }
    }
    console.log(name) ;
}

questionMain(i);