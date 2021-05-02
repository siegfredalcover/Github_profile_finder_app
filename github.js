class Github{
    constructor(){
        this.client_id = '2074912dcb6ebe9becdc';
        this.client_secret = '9528a83e3ecc6dfc9775391c7998ed669dfbf897';
    }

    async getUser(user){
        const profileResponse = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}