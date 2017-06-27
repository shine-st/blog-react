/**
 * Created by shinest on 27/06/2017.
 */


const auth = {
    /**
     * Checks if anybody is logged in
     * @return {boolean} True if there is a logged in user, false if there isn't
     */
    isLogin() {
        return !!localStorage.token;
    },
    store(token) {
        localStorage.token = token;
    }
}

export default auth;
