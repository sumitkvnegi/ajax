var btn = document.getElementById("btn");
var animal = document.getElementById("animal");
var i = 1;
btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
ourRequest.open(`GET`,`https://learnwebcode.github.io/json-example/animals-${i}.json`);

ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    i++;
    if(i>3){
        btn.classList.add("hide");
    }
};

ourRequest.send();
});

function renderHTML(data){
    var htmlString = "";

    for (let index = 0; index < data.length; index++) {
        htmlString+="<p>"+data[index].name+" is a "+data[index].species+" ";
        
        for (let j = 0; j < data[index].foods.likes.length; j++) {
            htmlString+=data[index].foods.likes[j]+",";
        }
        htmlString+="</p>";
    }
    animal.insertAdjacentHTML("beforeend",htmlString);
}

