<template>
    <v-bottom-navigation v-model="value" color="blue" class="overflow-visible" style="height: 56px;" grow>
        <v-row justify="center">
            <v-menu transition="scroll-y-reverse-transition">
                <template v-slot:activator="{ props }">
                    <v-btn class="ma-2" v-bind="props" @click="$emit('close')" v-show="!upbtn">
                        <v-icon>mdi-pencil</v-icon>
                        Tools
                    </v-btn>
                </template>
            </v-menu>

            <v-menu transition="scroll-y-reverse-transition">
                <template v-slot:activator>
                    <v-btn class="ma-2" onclick="document.getElementById('myFileInput').click()" @change=uploadImage>
                        <v-icon icon="mdi-plus-circle"></v-icon>
                        <input type="file" id="myFileInput" />
                        Add
                    </v-btn>
                </template>
            </v-menu>
            <v-menu transition="scroll-y-reverse-transition">
                <template v-slot:activator="{ props }">
                    <v-btn class="ma-2" v-bind="props" v-show="upbtn" @click="$emit('setImg', previewImage), upbtn = false"
                        color="primary">
                        <v-icon icon="mdi-image-area-close"></v-icon>
                        upload
                    </v-btn>
                </template>

            </v-menu>


            <v-menu transition="scroll-y-reverse-transition">
                <template v-slot:activator="{ props }">
                    <v-btn class="ma-2" v-bind="props" v-show="!upbtn">
                        <v-icon>mdi-history</v-icon>
                        Recent
                    </v-btn>
                </template>

            </v-menu>

        </v-row>

    </v-bottom-navigation>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            upbtn: false

        }
    },
    methods: {
        uploadImage(e) {
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            this.upbtn = true

            reader.onload = e => {
                this.previewImage = e.target.result;
                console.log(this.previewImage);
            };
        }
    },
    emits: ['close', 'setImg'],
}
</script>
<style>
#myFileInput {
    display: none;
}
</style>