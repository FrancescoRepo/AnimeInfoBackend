const ALL_CATEGORIES = "{GenreCollection}";
const LIST_MEDIA_OF_CATEGORY = `
query ($type: MediaType, $page: Int, $genre: String, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
        pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }
        media (type: $type, genre: $genre) {
            id
            title {
                romaji
            }
            coverImage{
                medium
            }
            status
            type
            description
            season
            volumes
            chapters
            episodes
            duration
            averageScore
            popularity
            isAdult
            startDate {
                year
                month
                day
            }
            endDate {
                year
                month
                day
            }
            episodes
            duration
            characters {
                nodes {
                    image {
                        medium
                    }
                    name {
                        full
                    }
                }
            }
            staff {
                nodes {
                    image {
                        medium
                    }
                    name{
                        full
                    }
                }
            }
            streamingEpisodes {
                title
                thumbnail
                url
                site
            }
        }
    }
}
`;
const MEDIA_SEARCH = `
query ($type: MediaType, $page: Int, $search: String, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
        pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }
        media (type: $type, search: $search) {
            id
            title {
                romaji
            }
            coverImage{
                medium
            }
            type
            status
            description
            startDate {
                year
                month
                day
            }
            endDate {
                year
                month
                day
            }
            episodes
            duration
            characters {
                nodes {
                    image {
                        medium
                    }
                    name {
                        full
                    }
                }
            }
            staff {
                nodes {
                    image {
                        medium
                    }
                    name{
                        full
                    }
                }
            }
            streamingEpisodes {
                title
                thumbnail
                url
                site
            }
        }
    }
}
`;

module.exports = {
    allCategories: ALL_CATEGORIES,
    listMediaOfCategory: LIST_MEDIA_OF_CATEGORY,
    animeSearch: MEDIA_SEARCH
}