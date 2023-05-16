import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (!req.body.title) {
      return res.status(500).json("제목쓰세요");
    }
    let clone = {
      title: req.body.title,
      content: req.body.content,
    };
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: clone });
    console.log(req.body);
    res.redirect(302, "/list");
  }
}
