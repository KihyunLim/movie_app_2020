import React from 'react';
import Proptypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'https://cdn.pixabay.com/photo/2020/06/29/11/58/sheep-5352474__340.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://cdn.pixabay.com/photo/2020/01/11/09/58/koala-4757068__340.jpg',
    rating: 3,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'https://cdn.pixabay.com/photo/2020/07/21/18/09/cat-5427019__340.jpg',
    rating: 4,
  },
  {
    id: 4,
    name: 'Doncasu',
    image:
      'https://cdn.pixabay.com/photo/2020/07/22/12/08/cats-eyes-5428855__340.jpg',
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Kimbap',
    image:
      'https://cdn.pixabay.com/photo/2020/07/02/07/06/goldcrest-5361996__340.jpg',
    rating: 2.5,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired,
};

export default App;
