import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { FaRegShareSquare } from "react-icons/fa";

import Avator from "./Avator";
import Icon from "./Icon";

const Post = ({ post }) => {
  const { title, body } = post;
  return (
    <div className="w-full shadow-md rounded-md bg-white p-2 my-3">
      <div className="flex items-center">
        <Avator />
        <div className="m-1">
          <h1 className="leading-3 text-lg font-bold">Ali Gaabow</h1>
          <p>10 minutes</p>
        </div>
      </div>

      <div className="mt-1">
        <img
          src="https://i.pinimg.com/564x/61/6a/c5/616ac5393e1cccbdceb3ab8dacd833bd.jpg"
          alt=""
          className="full w-full h-[300px] object-cover my-2"
        />
        <h1 className="text-3xl font-bold">{title}</h1>
        <p>{body}</p>
      </div>

      <div className="flex items-center justify-around m-2">
        <Icon text={"Like"} chidren={<AiOutlineLike className="inline" />} />
        <Icon text={"Comment"} chidren={<BiComment className="inline" />} />
        <Icon
          text={"Share"}
          chidren={<FaRegShareSquare className="inline" />}
        />
      </div>
    </div>
  );
};

export default Post;
