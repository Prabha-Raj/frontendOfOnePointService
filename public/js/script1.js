$(document).ready(function() {
    var t = window.location.href;
    $(".serviceItem").each(function() {
        t.includes($("a", this).attr("href")) && $(this).children("a").addClass("active")
    })
});
var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date;
! function() {
    if (!(window.innerWidth <= 800) && !(window.innerHeight <= 600)) {
        var t = document.createElement("script"),
            e = document.getElementsByTagName("script")[0];
        t.async = !0, t.src = "https://embed.tawk.to/6093ca1ab1d5182476b6362e/1f50kqusk", t.charset = "UTF-8", t.setAttribute("crossorigin", "*"), e.parentNode.insertBefore(t, e)
    }
}();
var cartId = "cart",
    gTotal = 0,
    qtyTotal = 0,
    convienceCharge = 0,
    localAdapter = {
        saveCart: function(t) {
            var e = JSON.stringify(t);
            return localStorage.setItem(cartId, e), !0
        },
        getCart: function() {
            return JSON.parse(localStorage.getItem(cartId))
        },
        clearCart: function() {
            localStorage.removeItem(cartId)
        }
    },
    ajaxAdapter = {
        saveCart: function(t) {
            JSON.stringify(t)
        },
        getCart: function() {
            return JSON.parse(data)
        },
        clearCart: function() {}
    },
    storage = localAdapter,
    helpers = {
        getHtml: function(t) {
            return document.getElementById(t).innerHTML
        },
        setHtml: function(t, e) {
            return document.getElementById(t).innerHTML = e, !0
        },
        itemData: function(t, e) {
            return {
                name: t.getAttribute("data-name"),
                price: t.getAttribute("data-price"),
                id: t.getAttribute("data-id"),
                img: t.getAttribute("data-img"),
                desc: t.getAttribute("data-desc"),
                count: e,
                total: parseInt(t.getAttribute("data-price")) * parseInt(e)
            }
        },
        updateView: function() {
            var t = cart.getItems(),
                e = this.getHtml("cartT"),
                a = _.template(e, {
                    items: t
                });
            this.setHtml("cartItems", a), this.updateTotal()
        },
        emptyView: function() {
            //this.setHtml("cartItems", "<p>Nothing to see here</p>"), this.updateTotal()
            this.updateTotal()
        },
        updateTotal: function() {
            //this.setHtml("totalPrice", cart.total)
        },
        updateShoppingCart: function(t) {
            console.log("this.items", t);
            let e = "",
                a = 0;
            for (var i = 0; i < t.length; i++) e += ' <div class="card cartItem border-0 bg-transparent"><div class="card-body">  <div class="row flex-nowrap g-0">  ', e += '<div class="col-auto"> <img width="80" src="./assets/images/service-gas-filling.webp" alt="gas-filling"/> </div> ', e += ' <div class="col ms-3 d-flex flex-column flex-nowrap"><h6 class="text-primary fw-bold mb-1">' + t[i].name + "</h6>", e += '<p class="small text-muted mb-2"> ' + t[i].desc + " </p>", e += '<div class="mt-auto d-flex flex-nowrap align-items-center justify-content-between lh-1">', e += ' <span class="fs-5 fw-bold">₹ ' + t[i].total.toFixed(2) + "</span> ", e += "</div> </div> </div> </div> </div>", a += parseFloat(t[i].total);
            this.setHtml("gTotal", (a + convienceCharge).toFixed(2)), this.setHtml("totalamount", a.toFixed(2)), this.setHtml("services", e), this.setHtml("qtyTotal", t.length)
        }
    },
    cart = {
        count: 0,
        total: 0,
        items: [],
        getItems: function() {
            return this.items
        },
        setItems: function(t) {
            const modalId = localStorage.getItem("subServiceId");
            console.log(modalId);
            this.total = 0, t = t.filter(t => !!$("#service_" + t.id).length), this.items = t, this.items && this.items.length > 0 ? document.querySelector("#bookingDiv").style.display = "block" : document.querySelector("#bookingDiv").style.display = "none";
            for (var e = 0; e < this.items.length; e++) {
                var a = this.items[e];
                gTotal += a.total, qtyTotal += a.count, helpers.setHtml("grandTotal"+modalId, gTotal), helpers.setHtml("qtyTotal"+modalId, qtyTotal);
                var i = document.querySelector("#service_" + a.id);
                i.querySelector(".addNow").style.display = "none", i.querySelector(".qtyGroup").classList.add("d-inline-flex"), i.querySelector(".count").value = a.count
            }
        },
        clearItems: function() {
            this.items = [], this.total = 0, storage.clearCart(), helpers.emptyView(), gTotal = 0, qtyTotal = 0
        },
        addItem: function(t, e) {
            !1 === this.containsItem(t.id) ? (this.items.push({
                id: t.id,
                name: t.name,
                price: t.price,
                count: e,
                total: t.price * e,
                desc: t.desc
            }), this.total = this.total + t.price * e, storage.saveCart(this.items)) : this.updateItem(t, e), this.total += t.price * e, this.count += e, this.items.length > 0 ? document.querySelector("#bookingDiv").style.display = "block" : document.querySelector("#bookingDiv").style.display = "none"
        },
        containsItem: function(t) {
            if (void 0 === this.items) return !1;
            for (var e = 0; e < this.items.length; e++)
                if (t == this.items[e].id) return !0;
            return !1
        },
        updateItem: function(t, e) {
            if (parseInt(e) > 0)
                for (var a = 0; a < this.items.length; a++) {
                    var i = this.items[a];
                    t.id === i.id && (i.count = parseInt(e), i.total = parseFloat(t.price) * parseInt(e), this.items[a] = i, storage.saveCart(this.items))
                } else this.items.splice(this.items.findIndex(e => e.id === t.id), 1), storage.saveCart(this.items)
        }
    },
    check = !1;
document.addEventListener("DOMContentLoaded", function() {
    storage.getCart() && (window.location.href.indexOf("cart") > -1 ? helpers.updateShoppingCart(storage.getCart()) : cart.setItems(storage.getCart()))
}), $(document).ready(function() {
    localStorage.setItem("subServiceId", 0);
    $(".addNow").click(function() {
        console.log("location", window.location.pathname.split("/")[1]), localStorage.setItem("location", window.location.pathname.split("/")[1]);
        const modalId = $(this).data('servicee-id');
        console.log('Modal=='+modalId+"subServiceId="+localStorage.getItem("subServiceId"));
        
        // Check if modalId has changed and clear localStorage only if necessary
        if (localStorage.getItem("subServiceId")!='0' && localStorage.getItem("subServiceId") != modalId) {
            if (confirm("You have alredy added items for another service. Are you sure you want to continue with reset previous cart?")) {
                cart.clearItems();
                helpers.setHtml("grandTotal"+localStorage.getItem("subServiceId"), 0), helpers.setHtml("qtyTotal"+localStorage.getItem("subServiceId"), 0);
                
                localStorage.setItem("subServiceId", modalId);
                console.log("Local storage 'cart' cleared due to modal change.");
            }
        } else {
            localStorage.setItem("subServiceId", modalId);
            console.log("Modal ID remains the same, keeping existing cart data.");
        }
        

        var t = this.parentNode.querySelector(".count");
        t.value = 1, this.parentNode.querySelector(".btn-outline-primary").style.display = "none", this.parentNode.querySelector(".qtyGroup").classList.add("d-inline-flex");
        var e = helpers.itemData(this.parentNode, t.value);
        gTotal = parseFloat(gTotal) + parseFloat(e.price), helpers.setHtml("grandTotal"+modalId, gTotal), qtyTotal = parseInt(qtyTotal) + 1, helpers.setHtml("qtyTotal"+modalId, qtyTotal), cart.addItem(e, 1)
    }), $(".qt-plus").click(function() {
        var t = this.parentNode.querySelector(".count");
        let e = t.value;
        t.value = parseFloat(e) + 1;
        var a = helpers.itemData(this.parentNode.parentNode, t.value);
        const modalId = $(this).data('servicee-id');
        console.log('Modal=='+modalId);
        gTotal = parseFloat(gTotal) + parseFloat(a.price), helpers.setHtml("grandTotal"+modalId, gTotal), qtyTotal = parseInt(qtyTotal) + 1, helpers.setHtml("qtyTotal"+modalId, qtyTotal), cart.addItem(a, t.value)
    }), $(".qt-minus").click(function() {
        var t = this.parentNode.querySelector(".count");
        t.value = parseFloat(t.value) - 1;
        var e = helpers.itemData(this.parentNode.parentNode, t.value);
        const modalId = $(this).data('servicee-id');
        console.log('Modal=='+modalId);
        cart.addItem(e, t.value), gTotal = parseFloat(gTotal) - parseFloat(e.price), helpers.setHtml("grandTotal"+modalId, gTotal), qtyTotal = parseInt(qtyTotal) - 1, helpers.setHtml("qtyTotal"+modalId, qtyTotal), 0 == t.value && (this.parentNode.parentNode.querySelector(".btn-primary").style.display = "block", this.parentNode.parentNode.querySelector(".qtyGroup").classList.remove("d-inline-flex"))
    })
});
