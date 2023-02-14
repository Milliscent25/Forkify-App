import * as  model from './model';
import recipeView from './views/recipeView';



import 'core-js/stable';
import 'regenerator-runtime/runtime';
const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



// to make an AJAX to an API WE USE THE FETCH FUCTION- fetch funcction will return a promise then in a asyn fuction(its runs un the background) then we await that promise so basically we will stop the code execution 
const controlRecipes = async function () {
  try {

    const id = window.location.hash.slice(1);
    console.log(id)

if (!id) return;
    recipeView.renderSpinner();

     // 1) loading recipes
   await model.loadRecipe(id);
 
    //2) rendering recipes

recipeView.render(model.state.recipe);


  } catch (err) {
    recipeView.renderError();

  }
};


const init = function(){
 recipeView.addHandlerRender(controlRecipes);
}
init();




// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe)



