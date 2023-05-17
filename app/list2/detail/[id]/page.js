import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";
export const revalidate = 60;

const Detail = async (props) => {
  // const db = (await connectDB).db("forum");
  // const result = await db.collection("post").findOne({
  //   _id: new ObjectId(props.params.id),
  // });

  await fetch("", { cache: "force-cache" });
  console.log(props.params.id);
  return (
    <div>
      <h3>상세페이지</h3>
      <h3>{result.title}</h3>
      <p>{result.content}</p>
    </div>
  );
};

export default Detail;
