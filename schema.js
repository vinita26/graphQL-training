export const typeDefs=`#graphql

type User {
    id:ID!,
    name:String,
    username:String,
}

type Post {
    id:ID!,
    userId:Int,
    title:String,
    body:String,
}

type Comment {
    id:ID!,
    postId:Int,
    email:String,
    name:String,
    body:String,
}

type Query {
    greeting: String,
    welcome: String,
    hello:String,
    bye:String,
    users:[User],
    user(id:ID!):User ,
    posts:[Post],
    post(id:ID!):Post,
    postByUserId(userId:ID!):[Post],
    comments:[Comment],
    comment(id:ID!):Comment,
}

input createUserInput{
    id:ID!,
    name: String,
    username:String
  }

  input updateUserInput{
    id:ID!,
    name: String,
    username:String
  }

  input createPostInput{
    id:ID!,
    userId:Int,
    title: String,
    body:String
  }

  input updatePostInput{
    id:ID!,
    userId:Int,
    title: String,
    body:String
  }

  input createCommentInput{
    id:ID!,
    postId:Int,
    email: String,
    name:String,
    body:String
  }

  input updateCommentInput{
    id:ID!,
    postId:Int,
    email: String,
    name:String,
    body:String
  }

type Mutation {
    createUser(user: createUserInput!) : User,
    updateUser(user: updateUserInput!) : User,
    deleteUser(id:ID!) : [User],
    createPost(post: createPostInput!) : Post,
    updatePost(post: updatePostInput!) : Post,
    deletePost(id:ID!) : [Post]
    createComment(comment: createCommentInput!) : Comment,
    updateComment(comment: updateCommentInput!) : Comment,
    deleteComment(id:ID!) : [Comment]
  }

`;