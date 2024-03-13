import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import db from './db.js';

// types
import { typeDefs } from './schema.js'

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
        postByUserId: (parent,args,context) => db.posts.filter(p => p.userId == args.id) ,

        comments: () => db.comments,
        comment: (_,args) => db.comments.filter(c => c.id == args.id)[0]
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

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log(`Server ready at: ${url}`)
