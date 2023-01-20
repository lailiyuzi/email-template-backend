import { parse } from "path";
import Post from "../models/PostModel.js";
import cors from 'cors';
import fs from 'fs';

export const getPost = async(req, res) =>{
    try {
        const response = await Post.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPostById = async(req, res) =>{
    try {
        const response = await Post.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = async(req, res) =>{
    try {
        await Post.create(req.body);
        console.log(req.body)
        res.status(200).json({msg: "Post Created"})
        
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = async(req, res) =>{
    try {
        await Post.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Post Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = async(req, res) =>{
    try {
        await Post.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Post Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
