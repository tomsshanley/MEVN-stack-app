import axios from 'axios'
const url = 'http://localhost:5000/api/posts'

export default class API {
    // to get all the posts from the server
    static async getAllPost(){

        const res = await axios.get(url);   //define res as the result of axios.get()
        return res.data                     //return res.data
    }

    // to post by ID
    static async getPostByID(id) {
        const res = await axios.get(`${url}/${id}`);   //define res as the result of axios.get()
        return res.data                     //return res.data
    }

    // to insert post into db
    static async addPost(post){
        const res = await axios.post(url, post);   //define res as the result of axios.get()
        console.log(res.status)
        return res.data                     //return res.data
  
    }

    // to update post into db
    static async updatePost(id, post){
        const res = await axios.patch(`${url}/${id}`, post);   //define res as the result of axios.get()
        return res.data                     //return res.data
    }

   // to delete post from db
   static async deletePost(id){
    const res = await axios.delete(`${url}/${id}`);   //define res as the result of axios.get()
    return res.data                     //return res.data
}
}