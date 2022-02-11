const app = document.getElementById('app')
app.innerHTML = `
<h1>Food Data Challenge</h1>
<p>Using vanilla javascript, write a function that takes a root node and foodData object, which displays data as children of the root node. Also, if a user clicks on one of the list items it is removed from the list.</p>
<h3>Menu</h3>`

const list = document.getElementById('list')

const foodData = {
  pasta: { price: '$15' },
  chicken: {price: '$10'},
  fish: { price: '$7' },
}

function resetButton() {
  const button = document.createElement('button')
  button.innerText = 'RESET'
  button.addEventListener('click', () => displayFoodListandToggle(list, foodData))
  app.append(button)
}

function displayFoodListandToggle(root, foodData) {
  Object.keys(foodData).forEach(food => {
    if (document.querySelector(`.${food}`)) return;
    const foodDiv = document.createElement('div');
    foodDiv.classList.add(food);
    foodDiv.innerText = `${food}: ${foodData[food].price}`
    root.append(foodDiv);
    list.addEventListener('click', e => {
      e.target.remove();
    })
  }) 
}

displayFoodListandToggle(list, foodData)
console.log(document.querySelectorAll('#list div'))
resetButton()