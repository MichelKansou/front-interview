import React, { useState, useEffect } from 'react';
import Post from "../components/post";
import Layout from '../components/Layout';
import Select from "../components/Select";
import SearchBar from "../components/SearchBar";

const sortDesc = arr => arr.sort((a,b) => new Date(b.date) - new Date(a.date));
const sortAsc = arr => arr.sort((a,b) => new Date(a.date) - new Date(b.date));

const PostList = ({ posts }) => posts.map(post => <Post key={post.id} title={post.title} image={post.src} date={post.date} text={post.text} />);

const fetchPosts = async () => {
    return await fetch('https://upply-interview.herokuapp.com/', {
        method: 'GET',
    }).then(response => response.json());
};

function Blog() {
    const [blogState, setBlog] = useState({
        filteredPosts: [],
        posts: [],
        selectedSort: 'desc'
    });

    const { posts, selectedSort, filteredPosts } = blogState;

    useEffect(() => {
        const getPosts = async () => {
            const result = await fetchPosts();
            setBlog({
                posts: sortDesc(result)
            });
        };
        getPosts();
    }, []);

    const sortByDate = () => {
        const isAscending = selectedSort === 'asc';

        setBlog({
            posts: isAscending ? sortDesc(posts) : sortAsc(posts),
            selectedSort: isAscending ? 'desc' : 'asc'
        });
    };

    const filterList = (event) => {
        const newList = posts.filter(post => post.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
        setBlog({
            posts,
            filteredPosts: newList
        });
    };

    return (
        <Layout>
            <SearchBar handleChange={filterList} />
            <Select value={selectedSort} handleChange={sortByDate} />
            <main className="post-container">
                <PostList posts={filteredPosts && filteredPosts.length > 0 && filteredPosts || posts} />
            </main>
        </Layout>
    );
}

export default Blog;
