const categoriesRef = [...document.querySelector('#categories').children];
console.log('Number of categories:', categoriesRef.length);

categoriesRef.forEach(category => {
  console.log('\nCategory:', category.querySelector('h2').textContent);
  console.log('Elements:', category.querySelectorAll('li').length);
});
