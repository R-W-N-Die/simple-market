import http from "@/api/http.js";
import router from "@/router.js";


export default {
    register(email, password) {
        return http.post('auth/register', {email, password}).then(response => {
            if (response.status === 200) {
                alert("Success!")
                router.push({name: 'Login'})
            }
        })
    }
}
