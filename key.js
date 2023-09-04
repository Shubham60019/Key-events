let kd=document.getElementById('demo1')
kd.addEventListener('keydown',()=>{
    alert(kd.value)
    document.body.style.backgroundColor=kd.value;
    console.log('keydown');
})


let ku=document.getElementById('demo2')
ku.addEventListener('keyup',()=>{
    alert(ku.value)
    console.log('keyup');
})


let kp=document.getElementById('demo3')
kp.addEventListener('keypress',()=>{
    alert(kp.value)
    let rd=Math.ceil(Math.random()*10000).toString(16);
    console.log(rd);
    document.body.style.backgroundColor=`#${rd}`;
})