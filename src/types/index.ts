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
            meta: {
              dimensions: {
                tiny: {
                  width: number,
                  height: number,
                },
                large: {
                  width: number,
                  height: number,
                },
                small: {
                  width: number,
                  height: number,
                },
                medium: {
                  width: number,
                  height: number,
                }
              }
            }
          },
          coverImage: {
            tiny: string,
            large: string,
            small: string,
            original: string,
            meta: {
              dimensions: {
                tiny: {
                  width: number,
                  height: number,
                },
                large: {
                  width: number,
                  height: number,
                },
                small: {
                  width: number,
                  height: number,
                },
              }
            }
          },
    }
};

export interface IAnimeDetails {
  id: string,
  attributes: {
      canonicalTitle: string,
      description: string,
      posterImage: {
          tiny: string,
          large: string,
          small: string,
          medium: string,
          original: string,
          meta: {
            dimensions: {
              tiny: {
                width: number,
                height: number,
              },
              large: {
                width: number,
                height: number,
              },
              small: {
                width: number,
                height: number,
              },
              medium: {
                width: number,
                height: number,
              }
            }
          }
        },
        coverImage: {
          tiny: string,
          large: string,
          small: string,
          original: string,
          meta: {
            dimensions: {
              tiny: {
                width: number,
                height: number,
              },
              large: {
                width: number,
                height: number,
              },
              small: {
                width: number,
                height: number,
              },
            }
          }
        },
      youtubeVideoId: string,
  }
}

