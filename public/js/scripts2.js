var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date;
! function() {
    if (!(window.innerWidth <= 800) && !(window.innerHeight <= 600)) {
        var e = document.createElement("script"),
            o = document.getElementsByTagName("script")[0];
        e.async = !0, e.src = "https://embed.tawk.to/6093ca1ab1d5182476b6362e/1f50kqusk", e.charset = "UTF-8", e.setAttribute("crossorigin", "*"), o.parentNode.insertBefore(e, o)
    }
}(), AOS && AOS.init();
let new_scroll_position = 0,
    last_scroll_position, mainMenu = document.querySelector(".mainMenu"),
    navSearch = document.querySelector(".bottomBar--search"),
    navLocation = document.querySelector(".bottomBar--location");

function bodyMenuPadding() {
    window.outerWidth < 768 ? document.body.style.paddingTop = mainMenu.offsetHeight + "px" : (document.body.style.paddingTop = 0, window.location.pathname.includes("cart") && (mainMenu.classList.add("bg-warning"), document.body.style.paddingTop = mainMenu.offsetHeight + "px"))
}

function manageAppOfferModal() {
    window.outerWidth < 768 && (null === window.localStorage.getItem("appOfferModalAllowed") || "true" == window.localStorage.getItem("appOfferModalAllowed")) ? openAppOfferModal() : closeAppOfferModal()
}

function scrollToJoin() {
    let e = document.getElementsByClassName("joinPartnerSection")[0].getBoundingClientRect().top + window.scrollY - document.getElementsByClassName("mainMenu")[0].offsetHeight;
    window.scroll({
        top: e,
        behavior: "smooth"
    })
}

function openAppOfferModal() {
    window.localStorage.setItem("appOfferModalAllowed", !0), document.body.classList.add("appOfferOpened"), document.querySelector(".appOffer").classList.add("open"), document.querySelector("footer").style.paddingBottom = document.querySelector(".appOfferContent").offsetHeight + "px"
}

function closeAppOfferModal(e) {
    document.querySelector("footer").style.paddingBottom = 0, document.body.classList.remove("appOfferOpened"), document.querySelector(".appOffer").classList.remove("open"), window.outerWidth < 768 && e && window.localStorage.setItem("appOfferModalAllowed", !1)
}
navSearch.style.display = "none", navLocation.style.display = "none", window.addEventListener("scroll", function(e) {
    (last_scroll_position = window.scrollY) > 80 ? (mainMenu.classList.add("menuScrolled"), new_scroll_position < last_scroll_position && last_scroll_position > 80 ? (navSearch.classList.remove("slideDown"), navLocation.classList.remove("slideDown"), navSearch.classList.add("slideUp"), navLocation.classList.add("slideUp")) : new_scroll_position > last_scroll_position && (navSearch.classList.remove("slideUp"), navSearch.classList.add("slideDown"), navLocation.classList.remove("slideUp"), navLocation.classList.add("slideDown"))) : mainMenu.classList.remove("menuScrolled"), new_scroll_position = last_scroll_position
});
const counters = document.querySelectorAll(".counter");

function updateFaq() {
    if (document.querySelector(".faqSection")) {
        let e = document.querySelectorAll(".faqSection .col-md-6")[1];
        e && (window.outerWidth < 768 ? (e.querySelector(".accordion-button").classList.add("collapsed"), e.querySelector(".accordion-collapse").classList.remove("show")) : (e.querySelector(".accordion-button").classList.remove("collapsed"), e.querySelector(".accordion-collapse").classList.add("show")))
    }
}

function goBack(e) {
    e.preventDefault(), window.history.back()
}

function activateTooltips() {
    let e = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
    e.length && e.forEach(e => new bootstrap.Tooltip(e))
}

function activatePopovers() {
    let e = [...document.querySelectorAll('[data-bs-toggle="popover"]')];
    e.length && e.forEach(e => new bootstrap.Popover(e))
}
counters.forEach(e => {
    let o = e.getAttribute("data-aos");

    function t() {
        let o = e.getAttribute("data-suffix"),
            a = +e.getAttribute("data-count"),
            l = +e.innerHTML,
            n = Math.floor((a - l) / 100);
        l < a && n > 0 ? (e.innerHTML = l + n, setTimeout(t, 1)) : e.innerHTML = a + o
    }
    if (console.log("hasAnimation" + o), o) {
        let a = !1;
        a || setInterval(function() {
            e.classList.contains("aos-animate") && !a && (console.log("initiated"), t(), a = !0)
        }, 100)
    } else t()
}), window.addEventListener("load", e => {
    bodyMenuPadding(), manageAppOfferModal(), updateFaq(), activateTooltips(), activatePopovers()
}), window.addEventListener("resize", function() {
    bodyMenuPadding(), manageAppOfferModal(), updateFaq(), activateTooltips(), activatePopovers()
});