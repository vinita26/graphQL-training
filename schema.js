export const typeDefs=`#graphql

type User {
    id:ID!,
    name:String,
    username:String,
    posts:[Post!],
    todos:[Todo!],
    albums:[Album!]
}

type Post {
    id:ID!,
    userId:Int,
    title:String,
    body:String,
    comments:[Comment!]
}

type Comment {
    id:ID!,
    postId:Int,
    email:String,
    name:String,
    body:String,
}

type Photo {
  id:ID!,
  albumId:Int,
  title:String,
  url:String,
  thumbnailUrl:String,
}

type Album {
  id:ID!,
  userId:Int,
  title:String,
  photos:[Photo!]
}

type Todo {
  id:ID!,
  userId:Int,
  title:String,
  completed:String,
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
    postsByUserId(userId: String): [Post],
    comments:[Comment],
    comment(id:ID!):Comment,
    commentsByPostId(postId: String): [Comment],
    todos:[Todo],
    todo(id:ID!):Todo,
    todosByUserId(userId: String): [Todo],
    photos:[Photo],
    photo(id:ID!):Photo,
    photosByAlbumId(albumId: String): [Photo],
    albums:[Album],
    album(id:ID!):Album,
    albumsByUserId(userId: String): [Album],

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