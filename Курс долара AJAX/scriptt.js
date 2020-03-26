let iusd = document.querySelector(".usd"),
    iua = document.querySelector(".ua");

    iua.addEventListener('input', () => {
        
        let request = new XMLHttpRequest();
        
        request.open('GET', 'curront.json');
        request.setRequestHeader('Content-type', 'aplication/json; charset = utf-8');
        request.send();
        
        
        request.addEventListener('readystatechange', function() {

            if(request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);

                iusd.value = iua.value / data.usd;

            
            } else {
                iusd.value = "Щось пішло не так!";
            }

            

        });
    
    });
    
    