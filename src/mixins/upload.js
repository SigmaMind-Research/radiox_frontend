export default{
    methods: {
        async uploadImage(e) {
            const image = e.target.files[0];
            this.imageData= e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            
            const loadEvent = await new Promise(resolve => reader.onload = resolve)
            this.previewImage = loadEvent.target.result;
            this.imgD= e.target.files[0];
            this.viewTools=true;
            this.sub=true;
            this.$emit('setImg', { name: this.previewImage, nameData: e.target.files[0] })
            this.reop=false;
        }
    }
}