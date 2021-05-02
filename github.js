class Github{
    constructor(){
        this.client_id = '2074912dcb6ebe9becdc';
        this.client_secret = 'dfa13103a4b463b302ad96184ddcba2fc4db4107';
    }

    async getUser(user){
        const profileResponse = await fetch
        (`https://api.github.com/users/${user}/?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}