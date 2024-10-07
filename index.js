const words = {
  subject: ['The turkey', 'Mom', 'Dad', 'The dog', 'The elephant', 'The cat'],
  verb: ['sat on', 'ate', 'danced with', 'saw', "doesn't like", 'kissed'],
  adjective: ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'],
  object: ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'],
  location: [
    'on the moon',
    'on the chair',
    'in my spaghetti',
    'in my soup',
    'on the grass',
    'in my shoes',
  ],
}

let currentIndices = {
  subject: 0,
  verb: 0,
  adjective: 0,
  object: 0,
  location: 0,
}

function cycleWord(type) {
  currentIndices[type] = (currentIndices[type] + 1) % words[type].length
  document.getElementById(type).textContent = words[type][currentIndices[type]]
}

function generateStory() {
  var element = document.querySelector('.story')

  let story = `${words.subject[currentIndices.subject]} ${
    words.verb[currentIndices.verb]
  } the ${words.adjective[currentIndices.adjective]} ${
    words.object[currentIndices.object]
  } ${words.location[currentIndices.location]}.`

  element.textContent = story
}

window.onload = function () {
  document.getElementById('subject').textContent =
    words.subject[currentIndices.subject]
  document.getElementById('verb').textContent = words.verb[currentIndices.verb]
  document.getElementById('adjective').textContent =
    words.adjective[currentIndices.adjective]
  document.getElementById('object').textContent =
    words.object[currentIndices.object]
  document.getElementById('location').textContent =
    words.location[currentIndices.location]
}

document
  .getElementById('subject')
  .addEventListener('click', () => cycleWord('subject'))
document
  .getElementById('verb')
  .addEventListener('click', () => cycleWord('verb'))
document
  .getElementById('adjective')
  .addEventListener('click', () => cycleWord('adjective'))
document
  .getElementById('object')
  .addEventListener('click', () => cycleWord('object'))
document
  .getElementById('location')
  .addEventListener('click', () => cycleWord('location'))
document
  .getElementById('generateStory')
  .addEventListener('click', generateStory)
