import users from './usersDb.js';

const usersResolver  = {

    // Resolvers for Queries
    Query: {
        greeting: () => 'Greeting GraphQL world!👋',
        welcome: () => 'Welcome GraphQL world!👋',
        hello: () => 'Hello GraphQL world!👋',
        bye: () => 'Good Bye GraphQL world!👋',
        
        users: () => users,
        user: (_,args) => users.filter(u => u.id == args.id)[0]
    },

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
    }
}

export default usersResolver;