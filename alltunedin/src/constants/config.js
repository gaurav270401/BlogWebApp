export const API_NOTIFICATION_MESSAGES={
    loading:{
        title: 'Loading...',
        message:'Data is being loaded,Please Wait'
    },
    success:{
        title:'Success',
        message:'Data succesfully loaded',
    },
    responseFailure:{
        title:'Error',
        message:'An error occured while fetching response from the server.Please try again.'
    },
    requestFailure:{
        title:'Error',
        message:'An error occured while parsing request data.'
    },
    networkError:{
        title:'Error',
        message:'Unable to connect with the server.Please check internet connectivity and try again later'
    }
}

export const SERVICE_URLS={
    userSignup :{url:'/signup',method:'POST'},
    userLogin :{url:'/login',method:'POST'},
    uploadFile :{url:'/file/upload',method:'POST'},
    publishPost :{url:'create',method:'POST'},
    getAllPosts :{url:'/posts',method:'GET',params:true},
    getPostById: {url:'post',method:'GET',query:true},
    deletePost:{url:'delete',method:'DELETE',query:true},
    newComment:{url:'/comment/new',method:'POST'},
    getAllComments:{url:'/comments',method:'GET',query:true},
    deleteComments:{url:'comment/delete',method:'DELETE',query:true},
    updatePost: {url:'/update',method:'PUT',query:true}
}
