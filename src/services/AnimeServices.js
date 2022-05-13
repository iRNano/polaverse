class AnimeServices {
  constructor() {
    this.urls = 'https://api.jikan.moe/v4';
  }

  getTopAnime = async () => {
    const temp = await fetch(`${this.urls}/top/anime`).then((resp) => resp.json());

    return temp.data;
  };
}

export default new AnimeServices();
