(function() {
  console.log('Loaded!');

  var $body = document.body
  var botResponses = [
    "Dearly beloved, we are gathered here today to get through this thing called life.",
    "Systematic overthrow of the underclass.",
    "Giving up so easy is something that I never do.",
    "You think you're special, well so do I.",
    "I get delirious when you hold my hand... body gets so weak I can hardly stand.",
    "I bet you that you never knew that in my dreams you are the star.",
    "Stand up everybody, this is your life. Let me take you to another world, let me take you tonight.",
    "I feel for you. I think I love you.",
    "Hollywood conjures images of the past.",
    "Nothing can stop us now, I'm gonna show you how. Show you how to work.",
    "Darlin', I know it's been a long time since you've been satisfied. I can tell by the look in your eyes.",
    "We've been together for quite some time. It'd take forever to get you off my mind."
    "When you were mine, you were all I ever wanted to do. Now I spend my time following him whenever he's with you.",
    "I know that you're going with another guy. I don't care, cuz I love u baby. That's no lie.",
    "I love you more than I did when you were mine.",
    "They say I'm so shy, but with you I just go wild!",
    "I'm fallin' in love. I'm fallin' baby, deeper everyday.",
    "New world needs spirituality that will last.",
    "Lay down your funky weapon, come join us on the floor.",
    "Making love and music's the only things worth fighting for.",
    "I'm not a human. I'm not a dove. I'm your conscious. I am love.",
    "All I really need to know is that you believe.",
    "If I gave you diamonds and pearls, would you be a happy boy or a girl?",
    "If I could, I would give you the world.",
    "I guess I should have known, by the way you parked your car sideways, that it wouldn't last.",
    "And if the stars ever fell one by one from the sky. I know Mars could not be too far behind.",
    "This kind of beauty has got no reason to ever be shy.",
    "I heard a voice on the news saying, 'people want to stop the war.' If they had a love as sweet as you, they'd forget what they were fighting for.",
    "Some people want to die so they can be free.",
    "If you like to fight, you're a double-drag fool. I'm going to another life, how bout you?",
    "Ooh-we-sha-sha-coo-coo-yeah. All the hippies sing together.",
    "Whatever you heard about me is true. I change the rules and do what I wanna do.",
    "Life is just a game, we're all just the same. Do you want to play?",
    "Party up. Got to party up!",
    "Reproduction of a new breed - Leaders, Stand Up, Organize.",
    "If you think I'm crazy, you're probably right, but I'm gonna have fun every motherfuckin' night.",
    "I never meant to cause you any sorrow. I never meant to cause you any pain... I only wanted to see you laughing in the purple rain.",
    "You need another lover like you need a hole in your head. You know there ain't no other, that can do the duty in your bed.",
    "Little sister make minimum wage. Livin' in a one-room jungle, monkey cage.",
    "She may not be in the black. But she happy she ain't in the red",
    "Excuse me, but I need your chemistry. Don't you wanna be my fantasy?",
    "We don't give a damn. We just wanna jam. Party up.",
    "Some people think I'm kinda cute, but that don't compute when it comes to Y-O-U.",
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




