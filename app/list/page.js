import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

const List = async () => {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();
  console.log(result);

  let data = {};
  return (
    <div className="list-bg">
      {result.map((el, i) => (
        <div key={el._id} className="list-item">
          <Link href={`list/detail/${el._id}`}>
            <h4>{el.title}</h4>
            <p>{el.content}</p>
          </Link>
          <Link href={`edit/${el._id}`}>edit</Link>
          <DetailLink />
        </div>
      ))}
    </div>
  );
};

export default List;
