fetch('json/rosquilla.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let template = '';
        console.log('data = ', data);
        
        data.forEach((item, i) => {
            let option='';
            let toppings='';
            item.batters.batter.forEach(sabor => {

                option +=`<option>${sabor.type}</option>`;

            });
            item.topping.forEach(sabor =>
                toppings+=`
                    <option>${sabor.type}</option>
                `
            );
            template+=`
                <div id="article-${item.id}" class="article">
                    <h2>${item.name}</h2>
                    <h3>${item.type}</h3>
                    <img src="img/${item.img}" rel="${item.img}"/>
                    <p class="price">Prize: ${item.ppu}€</p>
                    <form class="topping">
                        <p>Batters:</p>
                        <select class="toppings">
                            ${option}
                        </select>   
                        <p>Topping:</p>
                        <select class="toppings">
                            ${toppings}
                        </select>
                        Quantity:
                        <input type="number">
                        <input type="button" value="Buy">
                    </form>
                </div>
            `;
            document.getElementById('rosquillas').innerHTML=template;
        });

    })
    .catch(function(err) {
        console.error(err);
    });
    
    