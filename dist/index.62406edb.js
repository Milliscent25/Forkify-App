const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
// to make an AJAX to an API WE USE THE FETCH FUCTION- fetch funcction will return a promise then in a asyn fuction(its runs un the background) then we await that promise so basically we will stop the code execution 
const showRecipe = async function() {
    try {
        const res = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");
        const data = await res.json();
        console.log(res, data);
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map
