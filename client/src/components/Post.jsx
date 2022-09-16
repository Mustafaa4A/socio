const Post = ({ post }) => {
  return (
    <div>
      <div className="flex">
        <img
          src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-[50px] h-[50px] rounded-full mr-3"
        />
        <div>
          <h1 className="">Ali Gaabow</h1>
          <p>10 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
