const elemObj = {
    containers: {
        listContainer: document.querySelector('.contentListContainer'),
    },
    inputs: {
        textInp: document.querySelector('#nameOfList'),
        btnInp: document.querySelector('#submitBtn'),
        warningElem: document.querySelector('.contentSectionWarning')
    },
    elemStyles: {
        liStyle: 'listStyle'
    },
}
elemObj.inputs.warningElem.style.display = 'none';

class listElem {
    constructor() {
        this.list = document.createElement('li')
        this.list.classList.add('listStyle')
        this.list.innerHTML = elemObj.inputs.textInp.value
    }
    appendMethod(){
        elemObj.containers.listContainer.appendChild(this.list)
        
    }
    deleteMethod(){
        this.list.remove()
    }

}


function createNewLi(){
    const regEx = /[a-zA-Z]/;
    if(elemObj.inputs.textInp.value){
            let listNode = new listElem()
            listNode.appendMethod()
            elemObj.inputs.textInp.value = ''
            elemObj.inputs.warningElem.style.display = 'none';
    } else if(!elemObj.inputs.textInp.value){
        elemObj.inputs.warningElem.innerText = `Please enter more than 0 characters`
        elemObj.inputs.warningElem.style.display = 'block';
    }
}

elemObj.inputs.btnInp.addEventListener('click', createNewLi)