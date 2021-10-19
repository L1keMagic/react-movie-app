import PropTypes from 'prop-types';

function Food({name, picture, raiting}) {
  return(
    <div>
      <h3>я люблю {name}</h3>
      <h4>{raiting}/5</h4>
      <img src={picture} alt="" height='300px' />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  raiting: PropTypes.number.isRequired
}

const foodILike = [
  {
    'id': 1,
    'name': 'борщ',
    'image': 'https://i.imgur.com/afGMuQw.jpeg',
    'raiting': 4.1
  },
  {
    'id': 2,
    'name': 'уха',
    'image': 'https://i.imgur.com/R1ti0sh_d.webp?maxwidth=760&fidelity=grand',
    'raiting': 4.4
  },
  {
    'id': 3,
    'name': 'щи',
    'image': 'https://i.imgur.com/afGMuQw.jpeg',
    'raiting': 4.3
  },
  {
    'id': 4,
    'name': 'перец',
    'image': 'https://i.imgur.com/afGMuQw.jpeg',
    'raiting': 5.0
  }
]

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} raiting={dish.raiting} />)}
    </div>
  );
}

export default App;
