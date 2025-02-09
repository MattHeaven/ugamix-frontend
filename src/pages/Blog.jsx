import React from 'react';
// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

function Blog() {

    const dummyPosts = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: "Lorem ipsum dolor sit amet...",
        date: "Sunday, 1 Jan 2025",
        description: "Lorem ipsum dolor sit amet consectetur. Semper nibh dictum amet amet.",
        image: `https://via.placeholder.com/300x200?text=Post+${i + 1}`,
        tags: ["Design", "Research", "Presentation"].slice(0, Math.floor(Math.random() * 3) + 1),
    }));
      
    const POSTS_PER_PAGE = 6;
    

    const [currentPage, setCurrentPage] = useState(1);

    const paginatedPosts = dummyPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All blog posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paginatedPosts.map((post) => (
          <Card key={post.id} className="bg-black text-white p-4">
            <img src={post.image} alt={post.title} className="rounded-xl mb-4" />
            <CardContent>
              <p className="text-sm text-gray-400">{post.date}</p>
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-gray-300 text-sm">{post.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-700 rounded text-xs">{tag}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex justify-center items-center gap-4">
        <Button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="px-3 py-1 bg-gray-800 rounded">{currentPage}</span>
        <Button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, Math.ceil(dummyPosts.length / POSTS_PER_PAGE)))}
          disabled={currentPage === Math.ceil(dummyPosts.length / POSTS_PER_PAGE)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Blog