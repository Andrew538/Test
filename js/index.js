window.addEventListener("DOMContentLoaded", () => {
    function request() {
        let url = new URL('https://6075786f0baf7c0017fa64ce.mockapi.io/products');
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.setRequestHeader("Content-type", "aplication/json; charset=utf-8");
        request.send();
        request.addEventListener("load" , function() {
            if (request.status == 200) {
                const data = JSON.parse(request.response);
                console.log(data);
                data.forEach(item => {
                    let card = document.createElement('div');
                   
                    card.classList.add('card');
                    let message;
                    if (item.seen === true) {
                        message = "./icon/message.png";}
                        // console.log(message)
                       else {
                        message="";
                    };

                    let yellow;
                    if (item.seen === true) {
                        yellow = "./icon/Rectangleyellow.png";
                    }
                    else {
                       yellow = "";
                    };

                    card.innerHTML = `
                    <div class="card_img">
                    <img src="https://source.unsplash.com/random" ></div>
                    <div class="yellow"><img src=${yellow}></div>
                    <div class="locality">${item.locality}</div>
                    <div class="oldPrice">${item.oldPrice} Р</div>
                    <div class="price">${item.price} Р</div>
                    <div class="title">${item.title}</div>
                    <div class="like__icon"></div>
                    <div class="delivery__icon"></div>
                    <div class="compare__icon"></div>
                    <div class="date">${item.date}</div>
                    <div class="deal__icon"></div>
                    <div class="message">
                    <img src=${message}></div>
                    `;
                    document.querySelector('.app').appendChild(card);
                });

            } else {
                console.error("Что-то пошло не так");

            }
        });
    }
    request();
});