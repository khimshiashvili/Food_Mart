// menu
let menu = document.querySelector('.menu-icon');
let hide = document.querySelector('.hide');

// filter section 2
let getLi = document.getElementsByClassName('li');
let All = document.getElementsByClassName('col-lg-3');
let fruits = document.getElementsByClassName('Fruits');
let juice = document.getElementsByClassName('juice')
let vegetables = document.getElementsByClassName('vegetables')

// menu
menu.addEventListener('click',function(){
    hide.classList.toggle('hide');
})

// filter
for(let i = 0; i < getLi.length; i++){
    getLi[0].addEventListener('click',function(){
        for(let i = 0; i < All.length; i++){
            All[i].style.display = 'block';
        }
    })
    getLi[1].addEventListener('click',function(){
        for(let i = 0; i < All.length; i++){
            All[i].style.display = 'none';
            for(let i = 0; i < fruits.length; i++){
                fruits[i].style.display = 'block';
            }
        }   
    })
    getLi[2].addEventListener('click',function(){
        for(let i = 0; i < All.length; i++){
            All[i].style.display = 'none';
            for(let i = 0; i < juice.length; i++){
                juice[i].style.display = 'block';
            }
        }   
    })
    getLi[3].addEventListener('click',function(){
        for(let i = 0; i < All.length; i++){
            All[i].style.display = 'none';
            for(let i = 0; i < vegetables.length; i++){
                vegetables[i].style.display = 'block';
            }
        }   
    })
}

// plus
let minusBtn = document.getElementsByClassName('minus');
let plusBtn = document.getElementsByClassName('pluss')
let equalP = document.getElementsByClassName('equal')

for(let i = 0; i < minusBtn.length; i++){

    let a = 0;

    plusBtn[i].addEventListener('click',function(){
        a++;
        equalP[i].innerText = a;
        let b = a;
        minusBtn[i].addEventListener('click',function(){
            b--;
            equalP[i].innerText = b;
            a = b;
        })
    })

}