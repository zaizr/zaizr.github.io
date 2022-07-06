const btn = document.getElementById('btn');
const link = document.getElementById('link');
if (btn && link) {
    btn.addEventListener('click', () => {
        link.style.top = '0';

        document.querySelector('.CloseLinks').addEventListener('click', () => {
            link.style.top = '100%';
            return;
        });

        document.onkeyup = function(e)
        {
            if (e.key === 'Escape') {
                link.style.top = '100%';
                return;
            }
        };
    });
}

