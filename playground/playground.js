// const { title } = require("process")

const characters = [
  {
      title: 'Ninja',
      emoji: '🥷',
      powers: ['agility', 'stealth', 'aggression'],
  },
  {
      title: 'Sorcerer',
      emoji: '🧙',
      powers: ['magic', 'invisibility', 'necromancy'],
  },
  {
      title: 'Ogre',
      emoji: '👹',
      powers: ['power', 'stamina', 'shapeshifting'],
  },
  {
      title: 'Unicorn',
      emoji: '🦄',
      powers: [ 'flight', 'power', 'purity'],
  },
]

let btn = document.querySelector('#btn')



// btn.addEventListener('click', function(){
  
// for (let i=0;i<characters.length;i++){
//   console.log(characters[i].title)
// }
// console.log('Clicked!')
// })


// let myArray=[1,2,3,4,5,8]
// console.log(myArray)

// let myObject={
//   name:'Ed',
//   age:54
// }


for(let y of characters){
for(let power of y.powers){
  console.log(power)
}

}


