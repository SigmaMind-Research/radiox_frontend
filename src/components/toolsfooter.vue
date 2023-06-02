<template>
    <v-bottom-navigation v-model="value" color="blue" class="overflow-visible" style="height: 56px;" grow>
        <v-row justify="center">
            <v-menu transition="scroll-y-reverse-transition">
                <template v-slot:activator="{ props }">
                    <v-btn class="ma-2" v-bind="props" @click="$emit('close')">
                        <v-icon icon="mdi-undo-variant" />
                        Back
                    </v-btn>
                </template>
            </v-menu>
            <v-menu transition="scroll-y-reverse-transition" width="300px" :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                    <v-btn class="ma-2" v-bind="props">
                        <v-icon>mdi-brightness-6</v-icon>
                        Brightness
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-slider v-model="briVal" track-color="white" color="white" class="slid"
                            style="padding-top: 7px"></v-slider>
                        <h3 style="text-align:center">Brigntness: {{ (briVal - 50).toFixed(1) }}</h3>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu transition="scroll-y-reverse-transition" width="300px" :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                    <v-btn class="ma-2" v-bind="props">
                        <v-icon icon="mdi-contrast-circle" />
                        Contrast
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-slider v-model="conVal" track-color="white" color="white" class="slid"
                            style="padding-top: 7px"></v-slider>
                        <h3 style="text-align:center">Contrast: {{ (conVal - 50).toFixed(1) }}</h3>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-row>

    </v-bottom-navigation>
</template>

<script>
export default {
    data() {
        return {
            briVal: 50,
            conVal: 50,
            value: '',
            tools: ['Brigntness', 'contrast']
        }
    },
    emits: ['close']
}
</script>
<style>
#myFileInput {
    display: none;
}
</style>