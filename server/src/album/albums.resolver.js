import albums from './albumDb.js';

const albumsResolver = {

    // Resolvers for Queries
    Query: {
        albums: () => albums,
        album: (_, { id }) => albums.find((album) => album.id === id),
        albumsByUserId: (_, { userId }) =>
            albums.filter((album) => album.userId === userId),
    },
   
    User: {
        albums(user) {
            console.log('User:', user.id);
            return albums.filter((album) => album.userId === user.id);
        },
    },

    // Resolvers for Mutations
    Mutation: {
        createAlbum: (_, { album }) => {
            albums.push(album);
            return album;
        },

        updateAlbum: (_, { album }) => {
            console.log('Album', album);
            const index = albums.findIndex((a) => a.id === album.id);
            if (index >= 0) {
                albums[index] = { ...albums[index], ...album };
                return albums[index];
            }
            throw new Error('Album does not exist');
        },

        deleteAlbum: (_, { id }) => {
            console.log('delete', id);
            albums = albums.filter((album) => album.id != id);
            return albums;
        },
    },
};

export default albumsResolver;