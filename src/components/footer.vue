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
                        <input type="file" id="myFileInput" />
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
export default {
    data() {
        return {
            value: '',
        }
    },
    emits: ['close', 'setImg'],
    mixins: [upload]
}
</script>
<style>
#myFileInput {
    display: none;
}
</style>