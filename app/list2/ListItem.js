"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import DetailLink from "./DetailLink";

const ListItem = ({ result }) => {
  const router = useRouter();
  const onClick = (e) => {};
  return (
    <div>
      {result.map((el, i) => (
        <div key={el._id} className="list-item">
          <Link href={`list/detail/${el._id}`}>
            <h4>{el.title}</h4>
            <p>{el.content}</p>
          </Link>
          <Link href={`edit/${el._id}`}>edit</Link>
          <button
            onClick={(e) => {
              console.log(result[i]._id);
              fetch("/api/post/delete", {
                method: "POST",
                body: result[i]._id,
              }).then(() => {
                e.target.parentElement.style.opacity = 0;
                setTimeout(() => {
                  e.target.parentElement.style.display = "none";
                }, 1000);
                // router.replace("/list");
              });
            }}
          >
            삭제
          </button>
          <DetailLink />
        </div>
      ))}
    </div>
  );
};

export default ListItem;
