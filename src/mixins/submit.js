import axios from 'axios';
export default {
    methods: {
        async submitApi() {
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
                        this.originalTexts[0] = "Impression: "+ response.data.Impression + "\n"
                        this.originalTexts[1] = "Findings: "+ response.data.Findings + "\n"
                        this.originalTexts[2] = "Additional Oservations: " + response.data.Additional_Observations + "\n"

                        console.log(response.status);
                    })
                this.drawer = true;
                this.startTyping();
            }
            else {
                console.log(this.imgD);
                console.log("select image");
            }
        }
    }
}