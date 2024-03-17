import db from './db.js';

const resolvers = {

    // Resolvers for Queries
    Query: {
        greeting: () => 'Greeting GraphQL world!👋',
        welcome: () => 'Welcome GraphQL world!👋',
        hello: () => 'Hello GraphQL world!👋',
        bye: () => 'Good Bye GraphQL world!👋',
        
        users: () => db.users,
        user: (_,args) => db.users.filter(u => u.id == args.id)[0],

        posts: () => db.posts,
        post: (_,args) => db.posts.filter(p => p.id == args.id)[0],
        postsByUserId: (_, { userId }) => db.posts.filter((post) => post.userId == userId),

        comments: () => db.comments,
        comment: (_,args) => db.comments.filter(c => c.id == args.id)[0],
        commentsByPostId: (_,{postId}) => db.comments.filter(comment => comment.postId == postId),

        todos: () => db.todos,
        todo: (_,args) => db.todos.filter(t => t.id == args.id)[0],
        todosByUserId: (_,{userId}) => db.todos.filter(todo => todo.userId == userId),

        photos: () => db.photos,
        photo: (_,args) => db.photos.filter(p => p.id == args.id)[0],
        photosByAlbumId: (_,{albumId}) => db.photos.filter(photo => photo.albumId == albumId),

        albums: () => db.albums,
        album: (_,args) => db.albums.filter(a => a.id == args.id)[0],
        albumsByUserId: (_,{userId}) => db.albums.filter(album => album.userId == userId),
    },

    User: {
      posts(user) {
          return db.posts.filter((post) => post.userId === user.id);
      },

      todos(user) {
        return db.todos.filter(t => t.userId == user.id);
      },

      albums(user) {
        return db.albums.filter(album => album.userId == user.id);
      }
    },


    Post: {
      comments(post) {
        return db.comments.filter(c => c.postId == post.id);
      }
    },

    Album: {
      photos(album) {
        return db.photos.filter(p => p.albumId == album.id);
      }
    },
    // Resolvers for Mutations
    Mutation: {
        createUser:(_,{user})=>{  db.users.push(user);
             console.log("create",user); return user;},
       
         updateUser:(_,{user})=>{ 
            db.users.forEach((u,i)=>{if(u.id==user.id)
            db.users[i]=user;
            }); 
            console.log("update",user); 
            return user},
        
        deleteUser:(_,{id})=>{ console.log("delete",id);
          db.users=db.users.filter(u=>u.id!=id);
          return db.users;
          },

        createPost:(_,{post})=>{  db.posts.push(post);
            console.log("create post",post); return post;},
      
        updatePost:(_,{post})=>{ 
           db.posts.forEach((p,i)=>{if(p.id==post.id)
           db.posts[i]=post;
           }); 
           console.log("update post",post); 
           return post},
       
        deletePost:(_,{id})=>{ console.log("delete post",id);
         db.posts=db.posts.filter(p=>p.id!=id);
         return db.posts;
         },
    },
};

export default resolvers;