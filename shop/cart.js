var cart = {
    items: [],

    saveCart: function() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    },

    loadCart: function() {
        var savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.items = JSON.parse(savedCart);
        }
    },
    addItem: function(item) {
        this.items.push(item);
        this.saveCart(); // Local storage
    },

    removeItem: function(item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            this.saveCart(); // Local storage
        }
    },
    getTotalItems: function() {
        return this.items.length;
    },

    getTotelPrice: function() {
        var totalPrice = 0;
        for (var i = 0; i < this.items.length; i++) {
            totalPrice += this.items[i].price;
        }
        return totalPrice;
    },


};



cart.loadCart();