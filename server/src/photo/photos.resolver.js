import photos from './photosDb.js';

const photoResolver = {

    // Resolvers for Queries
    Query: {
        photos: () => photos,
        photo: (_,args) => photos.filter(p => p.id == args.id)[0],
        photosByAlbumId: (_,{albumId}) => photos.filter(photo => photo.albumId == albumId)
    }
}

export default photoResolver;