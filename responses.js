isNameSaid = false;
feeling = false;
mood = false;
console.log("hii");
function getBotResponse(input) {

    if(isNameSaid==false){
        isNameSaid=true;
        return `Hi, ${input}. How may I help you?`;
    }
    if(input == "Happy" && feeling==false){
        feeling=true;
        return `I am very happy seeing you be a happy one 😊`;
    }
    if(input == "Sad" && feeling==false){
        feeling=true;
        return `Ohh don't worry I am there for you always buddy 😔`;
    }
    if(input == "Energetic" && feeling==false){
        feeling=true;
        return `Damn, someone is feeling energetic today,got something to match your vibe 😜`;
    }
    if(input == "Guilty" && feeling==false){
        feeling=true;
        return `There might be reasons but don't worry sometimes its alright 😶`;
    }
    if(input == "Disheartened" && feeling==false){
        feeling=true;
        return `I believe the phase you are going through is soon gonna pass, just hold on tight 💔`;
    }
    if(input == "Worn out" && feeling==false){
        feeling=true;
        return `You did a lot of hardwork today, take some rest while we help you out 😵`;
    }
    if(input == "Bored" && feeling==false){
        feeling=true;
        return `Sometimes days does seems boring, dont worry we got some best ingredients to cure off that 😪`;
    }
    if (input == "Happy songs" && feeling==true && mood==false) {
        mood=true;
        window.open("https://music.youtube.com/playlist?list=PLfHpv1kc9by6u1AErRX-1fD60Tki7Tqdn","_blank");
        return "Opening....";
    } 
    if (input == "Sad songs" && feeling==true && mood==false) {
        mood=true;
        window.open("https://music.youtube.com/playlist?list=PLfHpv1kc9by710v5AxfPb5frVkgqJpPPp","_blank");
        return "Opening....";
    } 
    if (input == "Energetic songs" && feeling==true && mood==false) {
        mood=true;
        window.open("https://music.youtube.com/playlist?list=PLfHpv1kc9by5poANbVIyNu1XfXPH5-_hX","_blank");
        return "Opening....";
    } 
    if (input == "Heart Broken" && feeling==true && mood==false) {
        mood=true;
        window.open("https://music.youtube.com/playlist?list=PLfHpv1kc9by4VQDvJx9Z0HdJm5K7PCRHz","_blank");
        return "Opening....";
    } 
    if (input == "Boredom" && feeling==true && mood==false) {
        mood=true;
        window.open("https://music.youtube.com/playlist?list=PLfHpv1kc9by54so5InrJ_WLQLoiTmTfP2","_blank");
        return "Opening....";
    } 
    if (input == "BTS" && feeling==true && mood==false) {
        mood=true;
        window.open("https://music.youtube.com/playlist?list=PLfHpv1kc9by6MN5eZ5UIN8zQIyeC6hzZo","_blank");
        return "Opening....";
    } 
    if (input == "One Direction" && feeling==true && mood==false) {
        mood=true;
        window.open("https://music.youtube.com/playlist?list=PLfHpv1kc9by7QP09ODa8WzUE-TpS5Nnc8","_blank");
        return "Opening....";
    } 
    if (input == "Taylor Swift" && feeling==true && mood==false) {
        mood=true;
        window.open("https://music.youtube.com/playlist?list=PLfHpv1kc9by7OZuObgaJ5uJlcYO99IJF2","_blank");
        return "Opening....";
    } 
    if (input == "Rap" & feeling==true && mood==false) {
        mood=true;
        window.open("https://music.youtube.com/playlist?list=PLfHpv1kc9by6Fl9uNrInIOY6IP45HvM4L","_blank");
        return "Opening....";
    } 
    if (input == "hello") {
        return "Hello there!";
    } 
    else if (input == "goodbye" || input=="bye") {
        return "Nice to talk to You. See You Soon!";
    } 
    else if(input=="I love Music ChatBOT"){
        return `I hope you Enjoyed the Songs`;
    }
    else{
        return "It looks like this querry is out of scope for your buddy 😊 ";
    }
}   