const gameData = {
    "1": {
        "text": "It is friday 12 noon. Where are u now?",
        "image" : "smaller_images/1.png",
"choices": {
            "Raffles Hotel having high tea": [21,["clairssant"]],
            "In my office :(": [22,["cronut", "cronigiri", "crotiao"]],
            "Hanging out at a cafe with my girlies": [21,["almond", "matcha"]],
            "Chairing a meeting": [22,["plainssant"]],
            "Working out at the gym": [23, ["brossant"]]
        }
    },

    "10": {
        "text": "We’ve been through life together not knowing that we exhibit ssant traits. What ssant are you?",
        "image" : "smaller_images/10.png",
"choices" : {
            "click here!": [0, []],
        } 
    },

    "21":{
        "text": "What drink are you having?",
        "image" : "smaller_images/21.png",
"choices": {
            "Cafe latte": [3,["almond"]],
            "Iced Americano": [3,["cronut"]],
            "Matcha latte": [3,["matcha"]],
            "English Breakfast Tea": [3,["clairssant"]],
            "I don't like ang moh drinks": [3, ["moonssant", "crotiao"]]
        }
    },
"22": {
    "text": "Your colleagues ask you out for lunch. Do you",
    "image": "smaller_images/22.png",
    "choices": {
        "join them": [3, ["almond"]],
        "ask them to go to a restaurant you recommend": [3, ["matcha"]],
        "refuse as you brought your food": [4, ["cronut", "cronigiri"]],
        "refuse because u are too busy but you treat all of them for their lunch": [4, ["plainssant"]],
        "refuse as you need to go to the gym": [23, ["brossant"]]
    }
},

"23": {
    "text": "You are deciding what to do at the gym. Do you",
    "image": "smaller_images/23.png",
    "choices": {
        "go for spin": [4, ["almond"]],
        "lift some heavy weights": [4, ["brossant"]],
        "do pilates": [4, ["clairssant"]],
        "do yoga": [4, ["matcha"]],
        "realize that this gym is too expensive so u decide to just run downstairs": [4, ["crotiao"]]
    }
},

"3": {
    "text": "What do you guys talk about?",
    "image": "smaller_images/3.png",
    "choices": {
        "the same old stories from secondary sch the nth time": [4, ["crotiao"]],
        "remind everyone that mooncake festival is coming": [4, ["moonssant"]],
        "latest projects u are working on": [4, ["cronut"]],
        "i will listen first": [4, ["cronigiri"]]
    }
},


"4": {
    "text": "It's the end of the day. Do you",
    "image": "smaller_images/4.png",
    "choices": {
        "prepare to head out for drinks": [5, ["brossant", "almond"]],
        "go back to the gym": [23, ["brossant"]],
        "go home and rest": [5, ["clairssant", "crotiao"]],
        "ive got more work to do :(": [5, ["plainssant"]]
    }
},

"5": {
    "text": "You were about to do that but you get a phone call from your good friend. You pick up and say",
    "image": "smaller_images/5.png",
    "choices": {
        "brooo whats up bro": [6, ["brossant"]],
        "hi babe": [6, ["almond", "clairssant", "matcha"]],
        "mmmm?": [6, ["cronigiri", "plainssant"]],
        "不好意思": [6, ["moonssant"]]
    }
},

"6": {
    "text": "Your good friend invites you to climb the Dolomites. What is your response",
    "image": "smaller_images/6.png",
    "choices": {
        "ya lets go man! when?": [7, ["cronigiri"]],
        "what is that": [7, ["clairssant"]],
        "will I get suntanned": [7, ["clairssant"]],
        "is it dangerous": [7, ["plainssant"]],
        "who’s going": [7, ["almond"]],
        "but it’s mid autumn festival": [7, ["moonssant"]]
    }
},

"7": {
    "text": "You are packing for the trip. What is your packing philosophy?",
    "image": "smaller_images/7.png",
    "choices": {
        "‘i just pack light’": [8, ["plainssant", "cronigiri", "cronut"]],
        "‘just pack the essentials. if i’m missing anything i will definitely find/ pick up (hehe) things along the way’": [8, ["brossant"]],
        "‘better pack this’": [8, ["crotiao", "matcha"]],
        "‘don’t forget wet wipes’": [8, ["clairssant"]],
        "‘can’t wait to wear my OOTDs’": [8, ["almond"]]
    }
},

"8": {
    "text": "You and your friends are climbing the dolomites, when one of your friends fell. what do you do?",
    "image": "smaller_images/8.png",
    "choices": {
        "rush to their aid": [9, ["cronigiri", "crotiao"]],
        "saw that they are ok so you start taking a video of the situation": [9, ["brossant"]],
        "cry": [9, ["almond", "matcha"]],
        "comfort the one who is crying (not the one who fell)": [9, ["clairssant"]],
        "start thinking about how to prevent future falls": [9, ["cronut"]]
    }
},

"9": {
    "text": "You help your friend up and everyone makes it down the mountain safely :) You celebrate by",
    "image": "smaller_images/9.png",
    "choices": {
        "going to the onsen and seeing everyone’s kkj and boobies": [10, ["cronigiri"]],
        "going to a beer garden": [10, ["brossant"]],
        "remind everyone that the person who just fell can’t go to the onsen or cant drink": [10, ["plainssant"]],
        "arguing with the person above by saying that a little bit of alcohol won’t hurt": [10, ["crotiao"]],
        "suggesting to 提灯笼 as mooncake festival is coming": [10, ["moonssant"]]
    }
},




};
const personalities = { 
    "almond": 0,
    "clairssant": 0,
    "matcha": 0,
    "cronigiri": 0,
    "plainssant": 0,
    "cronut": 0,
    "crotiao": 0,
    "brossant": 0,
    "moonssant": 0,
};

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.textContent = gameData[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        }
    };
}


function changeState(newState, selectedPersonalities) { 
    // console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedVegetable() {
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share this with other ssants';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "Your true ssant is... (Right click or hold the image to save)";
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `What ssant are you? Find out at https://vivichong.github.io/ssant/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
        shareButton.style.marginBottom = '1rem';
        
        
        // Retake button
const retakeButton = document.createElement('button');
retakeButton.textContent = "I'm not this ssant! Retake the quiz";
retakeButton.className = 'choice-button';
retakeButton.onclick = () => location.reload();

text.appendChild(retakeButton);

    };
}


function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
