var coll = document.getElementsByClassName("collapsible");
let isNameSaid = false;

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;

    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Welcome to the ChatBot."
    document.getElementById("botStarterMessage1").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    
    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}
firstBotMessage();

// Gets the second message
function secondBotMessage() {
    let secondMessage = "What shall we be calling you by?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + secondMessage + '</span></p>';

    document.getElementById("userInput").scrollIntoView(false);
}
secondBotMessage();
// Shows the Mood
function showOpt1(){
    let options1 = ['<p class="botText"><span>1.Happy</span></p>',
     '<p class="botText"><span>2.Sad</span></p>',
     '<p class="botText"><span>3.Energetic</span></p>',
     '<p class="botText"><span>4.Guilty</span></p>',
     '<p class="botText"><span>5.Disheartened</span></p>',
     '<p class="botText"><span>6.Worn Out</span></p>',
     '<p class="botText"><span>7.Bored</span></p>']
    
    for (let index = 0; index < options1.length; index++) {
        $("#chatbox").append(options1[index]);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }
    
}
//Shows the Song Type
function showOpt2(){
    let options2 = ['<a href="#"><p class="botText"><span> 1.Happy songs </span></p></a>',
     '<a href="#"><p class="botText"><span> 2.Sad songs </span></p></a>',
     '<a href="#"><p class="botText"><span> 3.Energetic songs </span></p></a>',
     '<a href="#"><p class="botText"><span> 4.Heart Broken </span></p></a>',
     '<a href="#"><p class="botText"><span> 5.Romantic </span></p></a>',
     '<a href="#"><p class="botText"><span> 6.Boredom Killers </span></p></a>',
     '<a href="#"><p class="botText"><span> 7.BTS  </span></p></a>',
     '<a href="#"><p class="botText"><span> 8.One Direction </span></p></a>',
     '<a href="#"><p class="botText"><span> 9.Taylor Swift </span></p></a>',
     '<a href="#"><p class="botText"><span> 10.Rap </span></p></a>'
    ]
    
    for (let index = 0; index < options2.length; index++) {
        $("#chatbox").append(options2[index]);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }
} 

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    if(botResponse.slice(0,2)=="Hi"){
        // let options1 =['<p class="botText" onclick="showOpt1()"><span></span></p>'
        // // ,'<a href="#"><p class="botText"><span>2. Normal Talks</span></p></a>'
        // ]
        let options1 =[showOpt1()]
        for (let index = 0; index < options1.length; index++) {
            $("#chatbox").append(options1[index]);
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }
    }
    if(botResponse=="I am very happy seeing you be a happy one."){
        let options2 =['<p class="botText"><span>Lets hear something to complement your feeling right now. What is your mood right now to listen to?</span></p>']
        for (let index = 0; index < options2.length; index++) {
            $("#chatbox").append(options2[index]);
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }
    }
    if(botResponse=="Ohh don't worry I am there for you always buddy."){
        let options2 =['<p class="botText"><span>Lets hear something to complement your feeling right now. What is your mood right now to listen to?</span></p>']
        for (let index = 0; index < options2.length; index++) {
            $("#chatbox").append(options2[index]);
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }
    }
    if(botResponse=="Damn, someone is feeling energetic today,got something to match your vibe."){
        let options2 =['<p class="botText"><span>Lets hear something to complement your feeling right now. What is your mood right now to listen to?</span></p>']
        for (let index = 0; index < options2.length; index++) {
            $("#chatbox").append(options2[index]);
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }
    }
    if(botResponse=="There might be reasons but don't worry sometimes its alright."){
        let options2 =['<p class="botText"><span>Lets hear something to complement your feeling right now. What is your mood right now to listen to?</span></p>']
        for (let index = 0; index < options2.length; index++) {
            $("#chatbox").append(options2[index]);
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }
    }
    if(botResponse=="I believe the phase you are going through is soon gonna pass, just hold on tight."){
        let options2 =['<p class="botText"><span>Lets hear something to complement your feeling right now. What is your mood right now to listen to?</span></p>']
        for (let index = 0; index < options2.length; index++) {
            $("#chatbox").append(options2[index]);
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }
    }
    if(botResponse=="You did a lot of hardwork today, take some rest while we help you out."){
        let options2 =['<p class="botText"><span>Lets hear something to complement your feeling right now. What is your mood right now to listen to?</span></p>']
        for (let index = 0; index < options2.length; index++) {
            $("#chatbox").append(options2[index]);
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }
    }
    if(botResponse=="Sometimes days does seems boring, dont worry we got some best ingredients to cure off that."){
        let options2 =['<p class="botText"><span>Lets hear something to complement your feeling right now. What is your mood right now to listen to?</span></p>']
        for (let index = 0; index < options2.length; index++) {
            $("#chatbox").append(options2[index]);
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }
    }
    
    
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Music ChatBOT";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

// function heartButton() {
//     buttonSendText("Heart clicked!")
// }

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
}); 