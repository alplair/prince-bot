(function() {
  console.log('Loaded!');

  var $body = document.body
  var botResponses = [
    "Dearly beloved, we are gathered here today to get through this thing called life.",
    "Systematic overthrow of the underclass.",
    "It's gonna be a beautiful night. You got your world together. Everything's looking alright.",
    "Little girl at the party, maybe she'd like to dance. Ring around the rosie, pocket full of chance.", 
    "Always cry for love, never cry for pain.",
    "Like Evian and the deep blue sea, you and me got different taste.",
    "I'll melt with you. And you can melt with me to. And we'll groove and groove until the earth moves.",
    "When the going gets tougher than the tough can go, I grind the axe. That's when I go... to the max.",
    "Daddy pop is the writer and love is the book.",
    "Out of all your friends I want to be the closest.",
    "Walk faster, sweet baby. Don't let those bad boys catch you now.",
    "I'd rather hear you say forever. Instead of a smile, I'd rather see you cry.",
    "My name is Prince, and I am funky.",
    "Say that you love me like river... a river you say'll never run dry.",
    "See the people runnin' from the truth, livin' in the past when they need to be livin' the new.",
    "Hollywood conjures images of the past.",
    "The more you love me sugar, the more it makes me mad.",
    "Sometimes it snows in April. Sometimes I feel so bad. Sometimes I wish life was never ending... and all good things, they say, never last.",
    "You need another lover like you need a hole in your head.",
    "Sweet song of salvation a pregnant mother sings. She lives in starvation. Her children need all that she brings.",
    "Love will conquer if you just believe (oh, yeah).",
    "See all the people wonder why you set your goals high, high as the sky.",
    "All that's wrong in my world you can make right. You are my savior, you are my light.",
    "It's only mountains and the sea. There's nothing greater, you and me.",
    "I never imagined that love would rain on me and make me want to settle down.",
    "My name is Prince, the one and only.",
    "There comes a time in every man's life when he gets tired of fooling around , juggling hearts in a three ring circus. Some day it will drive a body down to the ground.",
    "Once upon a time in a land called Fantasy, seventeen mountains stood so high... the sea surrounded them and together they would be.",
    "New world needs spirituality that will last.",
    "Lay down your funky weapon, come join us on the floor.",
    "Making love and music's the only things worth fighting for.",
    "I'm not a human. I'm not a dove. I'm your conscious. I am love.",
    "All I really need to know is that you believe.",
    "Contradiction, my prediction is that... is it really important where I take my naps?",
    "If I gave you diamonds and pearls, would you be a happy boy or a girl?",
    "If I could, I would give you the world.",
    "I guess I should have known, by the way you parked your car sideways, that it wouldn't last.",
    "And if the stars ever fell one by one from the sky. I know Mars could not be too far behind.",
    "This kind of beauty has got no reason to ever be shy.",
    "I heard a voice on the news saying, 'people want to stop the war.' If they had a love as sweet as you, they'd forget what they were fighting for.",
    "Some people want to die so they can be free.",
    "Life is just a game, we're all just the same. Do you want to play?",
    "I never meant to cause you any sorrow. I never meant to cause you any pain... I only wanted to see you laughing in the purple rain.",
    "You need another lover like you need a hole in your head. You know there ain't no other, that can do the duty in your bed.",
    "Little sister make minimum wage. Livin' in a one-room jungle, monkey cage.",
    "She may not be in the black. But she happy she ain't in the red",
    "I don't care if we spend the night at your mansion. I don't care if we spend the night on the town. All I want is to spend the night together. All I want is to spend the night in your arms.",
    "All hail, the new king in town. Young and old, gather 'round.",
    "Black and white, red and green. The funkiest man, you've ever seen",
    "I ain't got no money. I ain't like those other guys you hang around. It's kinda funny. But they always seem to let you down.",
    "How can you just leave me standing? Alone in a world that's so cold?",
    "Open your heart, open your mind, a train is leaving all day. A wonderful trip through our time, and laughter is all you pay.",
    "I strangled Valentino, been mine ever since. If anybody asks you, you belong to Prince.",
    "I can't understand human curiosity, controversy. Was it good for you? Was I what you wanted me to be?",
    "People call me rude. I wish we were all nude. I wish there was no black and white. I wish there were no rules.",
    "I was dreamin' when I wrote this, forgive me if it goes astray. But when I woke up this mornin', could've sworn it was judgment day.",
    "You're so cool. Everything you do is success.",
    "The girl on the seesaw is laughing, for love is the color this place imparts.",
    "Make the rules, then break them all.",
    "Don't have to be rich to be my girl. Don't have to be cool to rule my world.",
    "Ain't no particular sign I'm more compatible with. I just want your extra time, and your kiss.",
    "Ever since I met you, baby, there's been something inside of me that keeps me wanting you.",
    "Won't you set me free? Take off these chains, girl, and I'll take off yours.",
    "There's no one in the world, baby, that I want to love more.",
    "I knew from the start that I loved you with all my heart. But you were untrue. You had another lover and she looked just like you.",
    "And we lay down on the sand of the sea. And before us animosity will stand and decree. That we speak not of love only blasphemy. And in the distance, six others will curse me.",
  ];

  // Rest of code goes here!

 var $button = document.querySelector('button');
 var $input = document.querySelector('input');
 var $textResponses = document.querySelector('.text-responses');

 var addTextToArray = function(text) { 
 	botResponses.push(text);
 }

 var appendYourTextToBot = function() {
	var inputValue = $input.value;

	var $response = document.createElement("p");
	var $user = document.createElement ("span");

	$user.textContent = "Me: ";
	$user.className = "user";

	$response.className = "response";
    // $response.textContent = inputValue;

	$response.appendChild($user);
	$response.innerHTML += inputValue;
	$textResponses.appendChild($response);

	// addTextToArray(inputValue);

}

 var appendBotResponse = function() {
    var randomNumber = Math.floor(Math.random()*botResponses.length);
    var botResponse = botResponses [randomNumber]
    ;

	var $response = document.createElement("p");
	var $user = document.createElement ("span");

	$user.textContent = "The Artist Formally Known as Prince: ";
	$user.className = "bot-name";

	$response.className = "response";
    // $response.textContent = botResponse;

    $response.appendChild($user);
    $response.innerHTML += botResponse;
	$textResponses.appendChild($response);    

 }

 var clearInput = function() {
 	$input.value = '';
 }

 var submitText = function() {
	console.log('submitted!');
	appendYourTextToBot();
	appendBotResponse();
	clearInput();
}
$button.addEventListener('click', submitText);

})();




