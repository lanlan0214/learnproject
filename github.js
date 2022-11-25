class Github {
  constructor() {
    this.client_id = '6ca8dc3c0b5b77ebc97f';
    this.client_secret = 'b65eba588a79bbdb7152b184ff5f43a9b3267ae3';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}