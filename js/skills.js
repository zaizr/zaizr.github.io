const skills = document.querySelectorAll('.Skill');
skills.forEach((skill) => {
    const overlay = skill.querySelector('.Overlay');
    const span = overlay.querySelector('span');

    skill.onmouseover = () => {
        overlay.style.opacity = '1';
        span.style.top = '95%';
    };

    skill.onmouseleave = () => {
        overlay.style.opacity = '0';
        span.style.top = '100%';
    };
});