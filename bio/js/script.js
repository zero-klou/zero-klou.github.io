
document.addEventListener('DOMContentLoaded', function() {
    let burger =  document.getElementById('burger'),
        nav = document.getElementById('nav');
    
    burger.onclick = () => {
        burger.classList.toggle('nav__burger-active');
        nav.classList.toggle('nav-active'); 
    };

    let menu = document.querySelectorAll('#nav li'),
    exer = document.querySelectorAll('.exercises'),
    currentExer;

    let images = {
        0: 'url("img/bg/bg-main.png")',
        1: 'url("img/bg/2.webp")',
        2: 'url("img/bg/3.jpeg")',
        3: 'url("img/bg/4.jpg")',
        4: 'url("img/bg/5.jpeg")',
        5: 'url("img/bg/6.jpg")',
        6: 'url("img/bg/7.jpg")',
        7: 'url("img/bg/8.jpg")',
        8: 'url("img/bg/9.jpg")',
        9: 'url("img/bg/10.1.jpg")',
        10: 'url("img/bg/11.jpg")',
        11: 'url("img/bg/12.jpg")'
    };

    menu.forEach(function(item, index, arr) {
        item.addEventListener('click', function() {
            if (currentExer) {
                currentExer.classList.add('dnone');
                currentExer.style.transform = '';
                for (item of currentExer.children) {
                    item.style.maxHeight = 400 + 'px';
                    item.lastElementChild.textContent = 'Читать полностью...';
                    item.lastElementChild.classList.remove('active');
                }
            }
            currentExer = exer[index];
            currentExer.classList.remove('dnone');

            let text = arr[index].textContent;
            document.getElementById('theme').textContent = text;

            burger.classList.remove('nav__burger-active');
            nav.classList.remove('nav-active'); 

            document.getElementById('img').style.backgroundImage = images[index];

            for (item of currentExer.children) {
                let btn = item.lastElementChild;
                if (item.scrollHeight <= 400) {
                    btn.style.display = 'none';
                }
            }

            currentExer.style.transform = 'scale(1)';
        });
    });
    
    document.querySelectorAll('.exercises__more').forEach(function(item) {
        let block = item.parentElement;

        item.addEventListener('click', function() {
            if (!item.matches('.active')) {
                block.style.maxHeight = block.scrollHeight + 'px';
                item.textContent = 'Скрыть';
            } else {
                block.style.maxHeight = 400 + 'px';
                item.textContent = 'Читать полностью...';
            }
            item.classList.toggle('active');
        });
    });

    function addMusic () {
        let sound = document.getElementsByTagName('audio')[0];
        
        let soundBtn = document.getElementById('volume'),
        check = true;

        soundBtn.onclick = function() {
            if (check) {
                this.innerHTML = '<img src="img/icons/2.svg" alt="resume"></img>';
                sound.play();
                check = false;
            } else {
                this.innerHTML = '<img src="img/icons/1.svg" alt="mute"></img>';
                sound.pause();
                check = true;
            }
        };
    }
    addMusic();    
});

