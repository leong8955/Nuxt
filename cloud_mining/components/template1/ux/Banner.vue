<template lang="pug">

Swiper(
    :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
    :pagination="{ dynamicBullets: true, }"
    :navigation="navigation"
    :autoplay="{ delay: 50000000, disableOnInteraction: false }"
    :breakpoints="breakpoints"
    :direction="'horizontal'"
    :loop="true"
    ).w-100
    SwiperSlide(v-for="(slide, index) in slides" :key="index")
        //- img(:src="slide.image" :alt="slide.alt").w-100
        NuxtLink(:to="slide.url ? slide.url : '#'")
            CommonUiTemplateImage(:item="slide.image" :sharedOrCustomTemplate="true" type="banner" imgClass="banner-img").w-100

    .swiper-pagination-outer
        .swiper-pagination-inner
        .swiper-pagination
        //- .swiper-button-prev
        //- .swiper-button-next
        
</template>

<script>
export default {
    setup() {
        const slides = [
            { image: 'banner/graph1.jpg', alt: 'Slide 1', url: '/login' },
            { image: 'banner/graph2.jpg', alt: 'Slide 2', url: '/account' },
            { image: 'banner/graph3.jpg', alt: 'Slide 3', url: '/register' },
            { image: 'banner/graph4.jpg', alt: 'Slide 4', url: '/about' },

        ]

        const navigation = {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }

        let breakpoints = {
            576: {
                slidesPerView : 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView : 1,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView : 1,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView : 1,
                spaceBetween: 50,
            },
        };
        

        return {
            slides,
            breakpoints,
            
            navigation,
            

        }
    },
    components: {},
    data() {},
    computed: {},
    mounted() {},
    methods: {},
};

    
</script>

<style scoped>

.swiper {
    text-align: center;
    font-size: 18px;
    background: red;
    background-color: transparent;

  /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.swiper .swiper-slide {
    display: flex;
    justify-content: center; /* Centers content horizontally */
    align-items: center; /* Centers content vertically */
    overflow: hidden; /* Ensures no image overflows */
    position: relative;
}

/* .swiper .swiper-slide img {
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
} */

.swiper-button-next,
.swiper-button-prev {
    color: #000;
}
</style>
