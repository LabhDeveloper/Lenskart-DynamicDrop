const Url = "https://labhdeveloper.github.io/JsonLive/Categories.json";
const Lens_url = "https://labhdeveloper.github.io/JsonLive/Products.json";

const getLens = async() => {
    let response = await fetch(Url, {
        method: 'GET'
    })
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option')
        let text = document.createTextNode(item.Category_Name)
        element.appendChild(text)
        element.value = item.Category_id
        document.getElementById('cat-op').appendChild(element)

    })
}



const getRest = async() => {
    let Lens_id = document.getElementById('cat-op').value;
    let Lenses = document.getElementsByClassName('restSelect')[0];
    while (Lenses.length > 0) {
        Lenses.remove(0)
    }
    let response = await fetch(`${Lens_url}`, {
        method: 'GET'
    })
    let data = await response.json()
    let d2 = data.filter((current_element) => {
        if (Lens_id == current_element.categories_id) {
            return current_element
        }
    })

    d2.map((item) => {
        let element = document.createElement('option')
        let text = document.createTextNode(`${ item.brand_name } | ₹  ${ item.Price }`)
        element.appendChild(text)
        Lenses.appendChild(element)
    })
}

