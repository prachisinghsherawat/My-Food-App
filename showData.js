


async function getData(url) {

    try {
        let response = await fetch(url);
        let data = await response.json();
        return data.meals;
        //console.log(data);
    }

    catch (err) {
        console.log("Error is :", err);
    }

}

function appendData(data, location) {
    location.innerHTML = "";

    data.map((elem) => {

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = elem.strMealThumb;

        let desc = document.createElement('p');
        desc.innerText = elem.strInstructions;

        let name = document.createElement('h1');
        name.innerText = elem.strMeal;

        div.append(img, name, desc);
        location.append(div)
    })
}


export { getData, appendData };