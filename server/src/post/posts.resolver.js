import posts from './postsDb.js';

const postsResolver = {

    // Resolvers for Queries
    Query: {

        posts: () => posts,
        post: (_,args) => posts.filter(p => p.id == args.id)[0],
        postsByUserId: (_, { userId }) => posts.filter((post) => post.userId == userId)
    },

    User: {
        posts(user) {
            console.log('....userId :' + user.id);
            return posts.filter((post) => post.userId === user.id);
        },
    },
    
    Mutation: {

        createPost:(_,{post})=>{  posts.push(post);
            console.log("create post",post); return post;},
      
        updatePost:(_,{post})=>{ 
           posts.forEach((p,i)=>{if(p.id==post.id)
           posts[i]=post;
           }); 
           console.log("update post",post); 
           return post},
       
        deletePost:(_,{id})=>{ console.log("delete post",id);
         posts=posts.filter(p=>p.id!=id);
         return posts;
         },
    },
}


export default postsResolver;