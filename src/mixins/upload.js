export default{

    methods: {
        async uploadImage(e) {
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            
            const loadEvent = await new Promise(resolve => reader.onload = resolve)
            this.previewImage = loadEvent.target.result;
            this.$emit('setImg', this.previewImage)
            console.log(this.previewImage);
        }
    }
}