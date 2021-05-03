class Github{
    constructor(){
        this.client_id = '2074912dcb6ebe9becdc';
        this.client_secret = '0c564eef70271789f7fdf430c9fa4111faefa617';
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