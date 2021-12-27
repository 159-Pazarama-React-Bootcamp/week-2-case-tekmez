import { getTodo, newTodo, deleteTodo, editTodo} from "./api";
document.addEventListener('click', btn)
function btn(e){
    e.preventDefault();
    let regex = /(?!^$)([^\s]){3,}/g;
    if(e.target.id === 'btnAdd'){
        let vale = document.getElementById('inputAdd');
        if(regex.test(vale.value)){
            newTodo();
        }
    }
    else if(e.target.id === 'delete')
        deleteTodo(e.target.parentElement.dataset.id);
    else if(e.target.id === 'edit'){
        editTodo(e.target.parentElement.dataset.id);
    }
};
window.onload= getTodo();

    
