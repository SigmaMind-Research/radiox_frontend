import axios from 'axios';
export default {
    methods: {
        async submitApi() {
            this.isLoading=true
            
            this.originalTexts=[]
            this.currentPosition=0;
            this.currentTextIndex = 0;
            this.typedText="";
            if (this.imgD) {
                const formimg = new FormData();
                console.log(this.imgD.name);
                formimg.append('xray_image', this.imgD);

                const authTkn = `Bearer ${(localStorage.getItem('token0'))}`;

                const head0 = {
                    "Authorization": authTkn
                };

                await axios.post(import.meta.env.VITE_BASE_URL + 'home/', formimg, { headers: head0 })
                    .then(response => {
                        console.log(response);
                        if (response.data =='Upload a Valid Image'){
                            this.originalTexts = "Uploaded image is not a x-ray. Please upload a valid image"
                        }
                        else{
                            this.originalTexts[0] = "Impression: "+ response.data.Impression + "\n"
                            this.originalTexts[1] = "\nFindings: "+ response.data.Findings + "\n"
                            this.originalTexts[2] = "\nAdditional Oservations: " + response.data.Additional_Observations + "\n"
                        }
                    })
                this.drawer = true;
                this.startTyping();
                this.reop = true;
            }
            else {
                console.log("select image");
                window.alert("No Image selected")
            }
        }
    }
}