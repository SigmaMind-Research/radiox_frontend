<template>
    <v-bottom-navigation color="blue" class="overflow-visible" style="height: 56px;" grow>
        <v-row justify="center">
            <!-- <v-menu transition="scroll-y-reverse-transition">
                <template v-slot:activator="{ props }">
                    <v-btn class="ma-1" v-bind="props" @click="$emit('close')">
                       <img class="ml-3 mb-1" width="38" height="25" src="https://img.icons8.com/small/32/FFFFFF/edit-image.png" alt="edit"/>
                       Edit
                    </v-btn>
                </template>
            </v-menu> -->

            <v-menu transition="scroll-y-reverse-transition">
                <template v-slot:activator>
                    <v-btn class="ma-1" onclick="document.getElementById('myFileInput').click()" @change=uploadImage>
                        <img class="ml-3 mb-1" width="38" height="25" src="https://img.icons8.com/windows/32/FFFFFF/add--v1.png" alt="add"/>
                        <input type="file" accept="image/png, image/jpeg, image/dcm" v-show="false" id="myFileInput" />
                        Add
                    </v-btn>
                </template>
            </v-menu>
            <!-- <v-menu transition="scroll-y-reverse-transition">
                <template v-slot:activator="{ props }">
                    <v-btn class="ma-1" v-bind="props">
                      <img class="ml-3 mb-1" width="38" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/time-machine--v2.png" alt="recent"/>                        
                      Recent
                    </v-btn>
                </template>
            </v-menu> -->

        </v-row>

    </v-bottom-navigation>
</template>

<script>
import upload from '../mixins/upload';
import submit from '../mixins/submit';

export default {
    inject: ["imgD"],
    emits: ['close', 'setImg'],
    mixins: [upload,submit]
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap');

body{
  font-family: 'Space Grotesk', sans-serif;
}

</style>