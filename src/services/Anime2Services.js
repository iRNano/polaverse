const Anime2Services = {
  getTopAnimes: async () => {
    const temp = await fetch('https://api.jikan.moe/v4/top/anime').then((resp) => resp.json());

    return temp.data;
  },
};

export default Anime2Services;
