class Github {
  constructor() {
    this.authorization = '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';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?authorization=${this.authorization}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}