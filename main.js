const listElement = document.getElementById('list');

items();


function items(){

    var i = 0;
    for(i=0;i <100;i++){
        const itemElement = document.createElement('li');
        const textElement = document.createTextNode(`ITEM ${i}`);

        //const attributeElement = document.createAttribute('href');

        //attributeElement.value = '#';
        //itemElement.setAttributeNode(attributeElement)

            

        itemElement.appendChild(textElement);
        listElement.appendChild(itemElement);        

    }
}
