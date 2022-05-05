const app = new Vue({
    el: '#app',
    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],

        activeSlide: 1, 

        autoscroll: null

    },

    methods: {

        nextPhoto() {
            this.activeSlide++;
            if (this.activeSlide > this.slides.length - 1) {
                this.activeSlide = 0;
            }
            console.log(this.activeSlide)
        }, 

        prevPhoto() {
            this.activeSlide--;
            if (this.activeSlide < 0) {
                this.activeSlide = this.slides.length - 1;
            }
            console.log(this.activeSlide);
        },

        mouseEnter() {
            console.log('sono sopra');
            clearInterval(this.autoscroll);
            this.autoscroll = null;
        },

        mouseLeave() {
            console.log('sono via');
            this.startAutoscroll();
        }, 

        startAutoscroll() {
            this.autoscroll = setInterval( () => {
                this.nextPhoto()
            }, 1000)
        }
    }, 

    mounted() {
        this.startAutoscroll();

        // console.log(this.slides[1].title);
    }

})






