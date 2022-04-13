var num1=300 , num2=100 , num3=200 , num4=250 , num5=350;
var total= num1 + num2 + num3 + num4 + num5;

function chocolate() {
    num1 = 0
    let a = document.createElement('p')
    a.innerHTML='Chocolate ---- 300'
    document.getElementById('fs2').appendChild(a)
    let aa = document.createElement('div')
    aa.style.backgroundColor='#5e2c04'
    aa.style.height='40px'
    aa.style.width= '150px'
    aa.style.borderRadius ='4px'
    aa.style.margin = 'auto'
    document.getElementById('div2').appendChild(aa)
    
}

function strawberry() {
    num2 = 0
    let b = document.createElement('p')
    b.innerHTML='Strawberry ---- 100' 
    document.getElementById('fs2').appendChild(b)
    let bb = document.createElement('div')
    bb.style.backgroundColor='#ff66cc'
    bb.style.height='40px'
    bb.style.width= '130px'
    bb.style.borderRadius ='4px'
    bb.style.margin = 'auto'
    document.getElementById('div2').appendChild(bb)
}

function butterscotch() {
    num3 = 0
    let c = document.createElement('p')
    c.innerHTML='Butterscotch ---- 200' 
    document.getElementById('fs2').appendChild(c)
    let cc = document.createElement('div')
    cc.style.backgroundColor='#fcae1e'
    cc.style.height='40px'
    cc.style.width= '110px'
    cc.style.borderRadius ='4px'
    cc.style.margin = 'auto'
    document.getElementById('div2').appendChild(cc)
}

function vanilla() {
    num4 = 0
    let d = document.createElement('p')
    d.innerHTML='Vanilla ---- 250' 
    document.getElementById('fs2').appendChild(d)
    let dd = document.createElement('div')
    dd.style.backgroundColor='#fdfaf1'
    dd.style.height='40px'
    dd.style.width= '90px'
    dd.style.borderRadius ='4px'
    dd.style.margin = 'auto'
    document.getElementById('div2').appendChild(dd)
}

function redvelvet() {
    num5 = 0
    let e = document.createElement('p')
    e.innerHTML='RedVelvet ---- 350' 
    document.getElementById('fs2').appendChild(e)
    let ee = document.createElement('div')
    ee.style.backgroundColor='#ca3433'
    ee.style.height='40px'
    ee.style.width= '70px'
    ee.style.borderRadius ='4px'
    ee.style.margin = 'auto'
    document.getElementById('div2').appendChild(ee)
    return num5
}

function buy(){
    var img = new Image ()
    img.id = 'don'
    img.src = 'https://spng.pngfind.com/pngs/s/0-7965_birthday-candles-png-icon-clip-art-birthday-candle.png'
    document.getElementById('div2').appendChild(img)
    let f = document.createElement('p')
    f.innerHTML = 'Total Bill = ' + (total - (num1 + num2 + num3 + num4 + num5))
    f.style.backgroundColor = 'orange'
    document.getElementById('fs2').appendChild(f)
}

