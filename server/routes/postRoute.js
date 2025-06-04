import express from 'express'
import { createPost, deletePost, getPosts, updatePost } from '../controllers/postController.js'
const postRouter = express.Router()

postRouter.post('/create', createPost)
postRouter.get('/all-posts', getPosts)
postRouter.get('/update/:id', updatePost)
postRouter.delete('/delete/:id', deletePost)

export default postRouter;