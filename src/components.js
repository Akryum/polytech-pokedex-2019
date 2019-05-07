import Vue from 'vue'
import BaseLoading from './components/BaseLoading.vue'
import BaseImage from './components/BaseImage.vue'

// Register component globally
Vue.component('BaseLoading', BaseLoading)
Vue.component('BaseImage', BaseImage)

// Kebab
// <base-image/>
// Camel
// <baseImage/>
// Pascal
// <BaseImage/>
// Snake
// <base_image/>
