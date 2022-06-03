const colors = [
    '#711c91',
    '#ea00d9',
    '#0abdc6',
    '#133e7c'
  ];
  
  createSquare = () => {
    const section = document.getElementById("container");
    const square = document.createElement('span');
    
    const size = Math.random() * 50;
    
    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';
    
    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';
    
    square.style.background = colors[Math.floor(Math.random() * colors.length)];

    section.appendChild(square);
    
    setTimeout(() => {
      square.remove()
    }, 5000);
  }
  
  setInterval(createSquare, 150);