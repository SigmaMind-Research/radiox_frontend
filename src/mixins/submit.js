import axios from 'axios';

let abortController

export default {
    methods: {
        cancelReq() {
            abortController.abort()
        },
        async submitApi() {

            this.cancelValue = true;
            
            abortController = new AbortController()
            const abortSignal = abortController.signal
            

            this.originalTexts=[]
            this.currentPosition=0;
            this.currentTextIndex = 0;
            this.typedText="";
            if (this.imgD) {
                this.isLoading=true
                const formimg = new FormData();
                formimg.append('xray_image', this.imgD);

                const authTkn = `Bearer ${(localStorage.getItem('token0'))}`;

                const head0 = {
                    "Authorization": authTkn
                };
                
                await axios.post(import.meta.env.VITE_BASE_URL + '/home/', formimg, { headers: head0, signal: abortSignal })
                    .then(response => {
                        if (response.data =='Upload a Valid Image'){
                            this.originalTexts = "Uploaded image is not a x-ray. Please upload a valid image"
                        }
                        else{
                            this.originalTexts[0] = "Impression: "+ response.data.Impression + "\n"
                            this.originalTexts[1] = "\nFindings: "+ response.data.Findings + "\n"
                            this.originalTexts[2] = "\nAdditional Oservations: " + response.data.Additional_Observations + "\n"
                        }
                        this.drawer = true;
                        this.startTyping();
                        this.reop = true;
                    })
                    .catch(e => {
                        if(abortSignal.aborted==true){
                            this.isLoading = false;
                        }
                        else{
                            this.errAlrt=true;
                            this.isLoading=false;
                        }
                    })
                    this.cancelValue=false;
            }
            else {
                this.snackbar=true;
            }
        }
    },

}