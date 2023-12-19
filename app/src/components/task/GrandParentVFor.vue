<script setup>
import { ref } from "vue"
import GrandChildVFor from '../task/GrandChildVFor.vue'

const productData = ref([
  {
    name: 'Iphone 13 Pro Max PTA Approved 256 gb dual sim HK Model with all box',
    description: "set is in immaculate condition with all box it's PTA proved and HK Model. Color is Sierra Blue. used with extreme care. From the day of purchase it's in the pouch. Battery Health is 95 price is slightly negotiable.",
    price: 'Rs 355,000',
    image: 'https://images.olx.com.pk/thumbnails/413275345-800x600.webp',
    productLink:'https://www.olx.com.pk/item/iphone-13-pro-max-256-gb-pta-approved-hk-model-with-all-box-iid-1080633892'
  },
  {
    name: 'Toyota Corolla Altis X 1.6 Automatic 2022',
    description: 'Toyota Corolla Altis X Automatic (View phone number) Brand New  New Tyres Model 2022 Engine 100% Good On fuel Non accidental Neat and Clean Family Used Car Suspension 100% Milage 26,600KM Price is flexible Just Buy and Drive Company Mantained Car Everything is Alright Islamabad Registration INTERIOR AND EXTERIOR LIKE NEW CONTACT ME ON WHATSAPP AND CALL :- 0/3/0/0/9/2/9/9/2/5/5.',
    price: 'Rs 6,250,000',
    image: 'https://images.olx.com.pk/thumbnails/418216183-800x600.webp',
    productLink:'https://www.olx.com.pk/item/toyota-corolla-altis-x-16-automatic-2022-iid-1081463194'
  },
  {
    name: '250cc single Cylander',
    description: 'If you searching for a Super Machine then your wait is over, Bullet 1 Motorsports is here with all time SuperMachine Which u can get only from us.',
    price: 'Rs 800,000',
    image: 'https://images.olx.com.pk/thumbnails/358178682-800x600.webp',
    productLink:'https://www.olx.com.pk/item/250cc-single-cylander-iid-1071027253'
  },
  {
    name: 'Charming 2-story 5 Marla House In Islamabad | Ideal Grey Structure | For Sale',
    description: 'Explore Your Dream Home! 2-Floor 5 Marla Grey Structure House for Sale in LandMark Society , Islamabad Welcome to your future home in the heart of Islamabad prestigious Mumtaz City. This 2-story, 5 Marla house is a canvas waiting for your personal touch. Situated in the esteemed Landmark Society, it offers a unique blend of comfort, convenience, and investment potential.',
    price: 'Rs 13,000,000',
    image: 'https://images.olx.com.pk/thumbnails/411119766-800x600.webp',
    productLink:'https://www.olx.com.pk/item/charming-2-story-5-marla-house-in-islamabad-ideal-grey-structure-for-sale-iid-1080270667'
  },
  {
    name: 'Bridal dress for sale',
    description: 'Intricate hand work with stones and resham. Only used once. , fits small to medium.',
    price: 'Rs 250000',
    image: 'https://images.olx.com.pk/thumbnails/412418329-800x600.webp',
    productLink:'https://www.olx.com.pk/item/bridal-dress-for-sale-iid-1080491123'
  },
])
</script>

<template>
  <GrandChildVFor :products-data="products" v-for="products in productData" :key="products" />
</template>