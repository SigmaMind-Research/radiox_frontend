<template>
    <v-bottom-navigation v-model="value" color="blue" class="overflow-visible" style="height: 56px;" grow>
        <v-row justify="center">
            <v-menu transition="scroll-y-reverse-transition">
                <template v-slot:activator="{ props }">
                    <v-btn class="ma-2" v-bind="props" @click="$emit('close')">
                        <v-icon>mdi-pencil</v-icon>
                        Tools
                    </v-btn>
                </template>
            </v-menu>

            <v-menu transition="scroll-y-reverse-transition">
                <template v-slot:activator>
                    <v-btn class="ma-2" onclick="document.getElementById('myFileInput').click()" @change=uploadImage>
                        <v-icon icon="mdi-plus-circle"></v-icon>
                        <input type="file" accept="image/png, image/jpeg, image/dcm" id="myFileInput" />
                        Add
                    </v-btn>
                </template>
            </v-menu>
            <v-menu transition="scroll-y-reverse-transition">
                <template v-slot:activator="{ props }">
                    <v-btn class="ma-2" v-bind="props">
                        <v-icon>mdi-history</v-icon>
                        Recent
                    </v-btn>
                </template>

            </v-menu>

        </v-row>

    </v-bottom-navigation>
</template>

<script>
import upload from '../mixins/upload';

import axios from 'axios';
export default {
    data() {
        return {
            value: '',
        }
    },
    props:['sub'],
    methods:{
            submitApi() {
            const formimg = new FormData();
            console.log(this.imageData);
            formimg.append('xray_image', this.imageData);

            const authTkn = `Bearer ${(localStorage.getItem('token0'))}`;
            console.log(authTkn);

            const head0 = {
                "Authorization": authTkn
            };

            axios.post(import.meta.env.VITE_BASE_URL + 'home/', formimg, { headers: head0 })
                .then(response => {
                    console.log(response);
                })
            this.drawer = true;
        }
    },
    emits: ['close', 'setImg'],
    mixins: [upload]
}
</script>
<style>
</style>