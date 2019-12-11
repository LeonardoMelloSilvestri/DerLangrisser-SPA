const initState = {
  offensiveItems: [
    {
      id: 1,
      name: 'Knife',
      attack: 1,
      magic: 0,
      defense: 0,
      price: 60,
      src: 'Knife'
    },
    {
      id: 2,
      name: 'Hammer',
      attack: 3,
      magic: 0,
      defense: 0,
      price: 250,
      src: 'Hammer'
    },
    {
      id: 3,
      name: 'Sword',
      attack: 5,
      magic: 0,
      defense: 0,
      price: 500,
      src: 'Sword'
    },
    {
      id: 4,
      name: 'Wand',
      attack: 0,
      magic: 1,
      defense: 0,
      price: 80,
      src: 'Wand'
    },
    {
      id: 5,
      name: 'Large Rod',
      attack: 0,
      magic: 3,
      defense: 0,
      price: 600,
      src: 'LargeRod'
    },
  ],
  defensiveItems: [
    {
      id: 1,
      name: 'Helm',
      attack: 0,
      magic: 0,      
      defense: 1,
      price: 50,
      src: 'Helm'
    },
    {
      id: 2,
      name: 'Shield',
      attack: 0,
      magic: 0,      
      defense: 3,
      price: 300,
      src: 'Shield'
    }
  ]
}

const itemsReducer = (state = initState, action) => {
  return state;
}

export default itemsReducer;