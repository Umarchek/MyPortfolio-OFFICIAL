const cursor = document.querySelector('.app-cursor');
document.addEventListener('mousemove', (e)=>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
