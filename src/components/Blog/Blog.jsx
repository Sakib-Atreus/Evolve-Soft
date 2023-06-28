import React from "react";

const Blog = () => {
  return (
    <div className="my-container space-y-2 py-10 p-3">
      <div className='mt-10 bg-red-400 p-4 border-radius-10 rounded-xl border-dotted border-2 border-black' >
                <h1 className='mb-2'><strong>1. When Should we use context API ?</strong></h1>
                <p className='text-left'><strong>Ans : </strong>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. sometimes the same data needs to be accessible by many components in the tree, and at different nesting levels. Context lets you “broadcast” such data, and changes to it, to all components below. </p>
            </div>
            <div className='mt-10 bg-red-400 p-4 border-radius-10 rounded-xl border-dotted border-2 border-black'>
                <h1 className='mb-2'><strong>2. What is Custom Hook ?</strong></h1>
                <p className='text-left'><strong>Ans : </strong>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
            </div>
            <div className='mt-10 bg-red-400 p-4 border-radius-10 rounded-xl border-dotted border-2 border-black'>
                <h1 className='mb-2'><strong>3. What is useRef ?</strong></h1>
                <p className='text-left'><strong>Ans : </strong>Ans: The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
            <div className='mt-10 bg-red-400 p-4 border-radius-10 rounded-xl border-dotted border-2 border-black'>
                <h1 className='mb-2'><strong>4. What is useMemo ?</strong></h1>
                <p className='text-left'> <strong>Ans : </strong>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
            </div>
    </div>
  );
};

export default Blog;
