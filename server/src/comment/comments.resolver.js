import comments from './commentsDb.js';

const commentsResolver = {

    // Resolvers for Queries
    Query: {

        comments: () => comments,
        comment: (_,args) => comments.filter(c => c.id == args.id)[0],
        commentsByPostId: (_,{postId}) => comments.filter(comment => comment.postId == postId)
    },
    Mutation: {

        createComment:(_,{comment})=>{  comments.push(comment);
            console.log("create comment",comment); return comment;},
      
        updateComment:(_,{comment})=>{ 
            comments.forEach((p,i)=>{if(c.id==comment.id)
            comments[i]=comment;
           }); 
           console.log("update comment",comment); 
           return comment},
       
        deleteComment:(_,{id})=>{ console.log("delete comment",id);
        comments=comments.filter(c=>c.id!=id);
         return comments;
         },
    },
}

export default commentsResolver;