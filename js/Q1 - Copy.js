let next = 0;
let i=0;
let pt=0;
function correct() {pt++; }
function wrong() { }
        

const Q = [
    {"no":1,"question":"คุณมีปัญหาการนอน นอนไม่หลับหรือนอนมาก",
    "choice":["แทบไม่มี","เป็นบางครั้ง","บ่อยครั้ง","เป็นประจำ"],"point":[0,1,2,3]},
    {"no":2,"question":"คุณมีสมาธิน้อยลง",
    "choice":["แทบไม่มี","เป็นบางครั้ง","บ่อยครั้ง","เป็นประจำ"],"point":[0,1,2,3]},
    {"no":3,"question":"คุณมีปัญหาหงุดหงิด/กระวนกระวาย/ว้าวุ่นใจ",
    "choice":["แทบไม่มี","เป็นบางครั้ง","บ่อยครั้ง","เป็นประจำ"],"point":[0,1,2,3]},
    {"no":4,"question":"คุณรู้สึกเบื่อ เซ็ง",
    "choice":["แทบไม่มี","เป็นบางครั้ง","บ่อยครั้ง","เป็นประจำ"],"point":[0,1,2,3]},
    {"no":5,"question":"คุณไม่อยากพบปะผู้คน",
    "choice":["แทบไม่มี","เป็นบางครั้ง","บ่อยครั้ง","เป็นประจำ"],"point":[0,1,2,3]},
    {"no":6,"question":"คุณทำภารกิจนี้สำเร็จ พ่อบ้านให้รางวัลกับคุณ นั่นก็คือ",
    "choice":["เปิดดูรางวัลของคุณ"],"point":["next"]}
]

function questionMain(i) {
    const currentData = Q[i];
    const choice_array = currentData.choice;
    const pointArray = currentData.point ;
    let choice_string = choice_array[0];
    if (i!==5) {

    } else {
       
    }
    
}

function functionnext() {
    
}

window.onload = function() {
    question.innerHTML = "โปรดเลือกคำตอบที่ถูกต้องที่สุด";
    button.innerHTML = `<button type="button" class="choice" onclick=questionMain()>เริ่มสอบ</button>`;
}