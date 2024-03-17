import todos from './todoDb.js';

const todoResolver = {

    // Resolvers for Queries
    Query: {
        todos: () => todos,
        todo: (_,args) => todos.filter(t => t.id == args.id)[0],
        todosByUserId: (_,{userId}) => todos.filter(todo => todo.userId == userId)
    },
    User: {

        todos(user) {
          return db.todos.filter(t => t.userId == user.id);
        },
    }
}


export default todoResolver;