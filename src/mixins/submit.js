import axios from 'axios';
export default{
    methods:{
        submitApi() {
            if (this.imgD) {
                const formimg = new FormData();
                console.log(this.imgD.name);
                formimg.append('xray_image', this.imgD);

                const authTkn = `Bearer ${(localStorage.getItem('token0'))}`;

                const head0 = {
                    "Authorization": authTkn
                };

                axios.post(import.meta.env.VITE_BASE_URL + 'home/', formimg, { headers: head0 })
                    .then(response => {
                        this.imp= response.data.Impression
                        this.finds = response.data.Findings
                        this.addObs = response.data["Additional Observations"]

                        console.log(response.status);
                    })
                this.drawer = true;
            }
            else {
                console.log(this.imgD);
                console.log("select image");
            }
        }
    }
}