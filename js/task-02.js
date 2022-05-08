const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const makeiIngredientsItems = ingredientsArray => {
  return ingredientsArray.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.classList.add('item');
    return item;
  });
};

const ingredientsItems = makeiIngredientsItems(ingredients);
ingredientsList.append(...ingredientsItems);
