const elemObj = {
    containers: {
        listContainer: document.querySelector('.contentListContainer'),
    },
    inputs: {
        textInp: document.querySelector('#nameOfList'),
        btnInp: document.querySelector('#submitBtn')
    },
    elemStyles: {
        liStyle: 'listStyle'
    }
}

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
    let listNode = new listElem()
    listNode.appendMethod()
}

elemObj.inputs.btnInp.addEventListener('click', createNewLi)