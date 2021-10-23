const messages = ['How may I help You?'];
var executed = false;
const substrings = ['.com', '.in', '.org', 'www.']

function postSuccess(){
    const post = document.getElementById("text");
    if(post.value != ""){
        $("#chat").append(`<h4 class="user">${post.value}</h4>`);
        console.log(post.value)
        if(!executed){
        if(post.value == "Hi" | post.value == "hi" | post.value == "Hello" | post.value == "hello" ){
            $("#chat").append(`<h4 class="system">${post.value}!!</h4>`)
            for(let i = 0; i < 1; i++){
                $("#chat").append(`<h4 class="system">${messages[i]}</h4>`)
            }
            executed = true;
        }
        if(post.value == "who are you?" | post.value == "who are you"){
            $("#chat").append(`<h4 class="system">super duper chat bot!!</h4>`)
        }
    }
    }
    post.value = "";
    gotoBottom("chat")
    
}
function post(){
    if(event.key === 'Enter'){
        postSuccess();
        gotoBottom("chat")
    }
}

function gotoBottom(id){
    var element = document.getElementById(id);
    element.scrollTop = element.scrollHeight - element.clientHeight;
}

let Timer = setTimeout(() => {
    $("#chat").append('<h5> PLEASE REPLY WITHIN 3min TO KEEP THE CONVERSATION GOING</h5>');
}, 18000)

window.onbeforeunload = function() {
    return("Data will be lost if you leave the page, are you sure?");
  };

