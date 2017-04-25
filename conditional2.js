var gameChoice = window.prompt('Hello, my name is Mr. NagaSaki. Some just just call me the guy in the sky. What is your name.... Its ok, I will not kill you if you do not tell me')

// If the user clicks "Cancel" in the prompt
if (gameChoice === null || gameChoice === '') {
  gameChoice = gameChoice || ''
  gameChoice = gameChoice.trim().toLowerCase()
  window.alert('Sike! I will kill you if you do not tell me. Prepare to die by the might of my master sword!!!!')
// If the user clicks "OK" in the prompt
} else {
  gameChoice = window.prompt('Nice to meet you ' + gameChoice + '! Time to start your journey. What power would you like? wind, water, or fire?')
  // Normalize the string
  gameChoice = gameChoice.trim().toLowerCase()

  // If the chosen pill was either red or blue
  if (gameChoice === 'wind' || gameChoice === 'water' || gameChoice === 'fire') {
    window.alert('Great Choice! The game will now commence..... I hope your readdyyyyyy!')
  // If the chosen pill was NEITHER red NOR blue
  } else {
    window.alert('You seem to not follow rules very well. Time to pick a number')
  }
}

var modeChoice = window.prompt('Pick a number. 1 or 2')
modeChoice = parseInt(modeChoice)
if (isNaN(modeChoice)) {
  window.alert("game over, you don't follow instructions")
}

if (modeChoice === 1 || modeChoice === 2) {
  var randomNumber = Math.random()
  if (randomNumber > 0.7) {
    window.alert('You gained 2 attack points')
    window.alert('You now have to fight the evil Boss!')
    window.alert('You hit the boss with your master sword that has +2 attack!')
    window.alert('You won the battle!')
  } else if (randomNumber > 0.3) {
    window.alert('You have unlocked new armor')
    window.alert('You now have to fight the evil')
    window.alert('The boss cracked your armor during battle!')
    window.alert('You lost the battle!')
  } else if (randomNumber > 0.1) {
    var finalChoice = window.confirm('Are you sure you want to keep your number')

    if (finalChoice) {
      window.alert('You know what they always say. Always go with your first mind. Too bad your game ends now')
    } else {
      window.alert('Good choice. You are a winner')
    }
  } else if (randomNumber > 0.01) {
    window.alert('You\'re a quitter! Quitters never win!')
  } else {
    window.alert('You unlocked a secret part of the game. You get 10000000000000000000 points. Don\'t tell anyone how to get here!')
  }
}
