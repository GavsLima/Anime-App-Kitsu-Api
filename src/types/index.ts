export interface IAnime {
    id: string,
    attributes: {
        canonicalTitle: string,
        posterImage: {
            tiny: string,
            large: string,
            small: string,
            medium: string,
            original: string,
          },
          coverImage: {
            tiny: string,
            large: string,
            small: string,
            original: string,
          },
    }
}
