var morphing = anime({
    targets: ".morph",
    points: [{
        value: "460.677372 125.296036 108.040017 24.8652344 112.454079 125.296036"
    }, {
        value: "460.677372 157.296036 112.758683 38.9677241 119.111306 145.719727"
    }],
    easing: "easeInOutQuad",
    duration: 3e3,
    loop: !0
});
morphing = anime({
    targets: ".morph2",
    points: [{
        value: "108.040017 24.8652344 168.780251 0 460.677372 125.296036"
    }, {
        value: "112.758683 38.9677241 184.146186 0 460.677372 157.296036"
    }],
    easing: "easeInOutQuad",
    duration: 3e3,
    loop: !0
}), morphing = anime({
    targets: ".morph3",
    points: [{
        value: "75.3147561 38.1354167 460.677372 125.296036 0 68.5184024"
    }, {
        value: "78.250435 57.8044647 460.677372 157.296036 0 100.518402"
    }],
    easing: "easeInOutQuad",
    duration: 3e3,
    loop: !0
});
const ctcMail = document.querySelectorAll(".contact");
ctcMail.forEach((e => {
    e.addEventListener("click", (() => {
        const a = window.getSelection(),
            t = document.createRange();
        t.selectNodeContents(e), a.removeAllRanges(), a.addRange(t);
        try {
            document.execCommand("copy"), a.removeAllRanges(), e.getElementsByClassName("mail")[0].dataset.status = "Copied!", e.classList.add("success"), setTimeout((() => {
                e.classList.remove("success"), e.getElementsByClassName("mail")[0].dataset.status = "Click to Copy"
            }), 1200)
        } catch (e) {}
    }))
}));
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true
  });
  

  
  