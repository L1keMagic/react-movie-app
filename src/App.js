
function Food({name}) {
  return(<h3>я люблю {name}</h3>);
}

const foodILike = [
  {
    'name': 'борщ',
    'image': 'https://i.imgur.com/afGMuQw.jpeg'
  },
  {
    'name': 'уха',
    'image': 'https://i.imgur.com/R1ti0sh_d.webp?maxwidth=760&fidelity=grand'
  },
  {
    'name': 'щи',
    'image': 'https://i.imgur.com/afGMuQw.jpeg'
  },
  {
    'name': 'перец',
    'image': 'https://i.imgur.com/afGMuQw.jpeg'
  }
]

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => <Food name={dish.name} />)}
    </div>
  );
}

export default App;
