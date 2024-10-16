const btn = document.getElementById('btn');
const notePad = document.getElementById('notePad')
const inp  = document.getElementsByClassName('inp')
btn.addEventListener('click', () => {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Empty Note';
    newInput.classList.add('inp');
    newInput.style.width = "100%";
    notePad.insertBefore(newInput, btn);
});


notePad.addEventListener('dblclick', (e) => {
    if (e.target.classList == 'inp'){
        const conf = confirm("salam")
        if (conf) {
            e.target.remove();
        }
    }
    else{ 
        return;
    }
});
