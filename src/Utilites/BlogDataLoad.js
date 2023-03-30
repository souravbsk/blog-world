import { useEffect, useState } from "react"

const BlogDataLoad = () => {
    const [Blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => {
            setBlogs(data);
        })
    },[])
    return Blogs;
}

export default BlogDataLoad;