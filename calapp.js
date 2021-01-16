function getNumber(num){
    var result = document.getElementById('result')
    result.value += num;
}

function clearNumber(){
    var result = document.getElementById('result')
    result.value = ""
}

function showResult(){
    var result = document.getElementById('result')
    if(result.value == ""){
        result.value = "";
    }
    else if(result.value=="0/0"){
        result.value = "Math Error";
    }
    else{
        result.value = eval(result.value);
    }
}
function getDelete(){
    var result = document.getElementById('result')
    result.value -= num;
}
