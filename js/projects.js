const types = document.querySelectorAll('.Type');
const a = document.getElementById('BackEnd');
const b = document.getElementById('FrontEnd');
a.style.display = 'none';
b.style.display = 'none';
types.forEach((type) => {
    type.onclick = () => {
        types.forEach((t) => {
            t.classList.remove('Selected');
        });
        type.classList.add('Selected');
        if (type.id === 'a') {
            a.style.display = 'block';
            b.style.display = 'none';
        } else {
            a.style.display = 'none';
            b.style.display = 'block';
        }
    };
});
