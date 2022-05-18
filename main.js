const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            Sizes: [69,70,71,42],
            Varients: [
                {id: 69, Color: "Blue"},
                {id: 420, Color: "Red"}
            ]
        }
    }
})
