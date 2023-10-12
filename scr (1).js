
function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
}
loadingAnimation()

function loadingAni(){
    gsap.from(".content-chori span",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
}
loadingAni()


function loadingAnim(){
    gsap.from(".image",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
}
loadingAnim()

