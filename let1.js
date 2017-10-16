var a = 12;

function myFunction(){
    
    console.log(a);

    let b = 13;

    if(true) {
        let c = 14;
        console.log(b);
    }

    //console.log(c);   // 블록 스코프안 유효
}

myFunction();