import { useParams } from "react-router-dom";

type Props = {
  mode: "create" | "edit";
};

const BlogCreateEdit = ({ mode }: Props) => {
  const { id } = useParams();
  return (
    <div>
      Blog#${id} - {mode}
    </div>
  );
};

export default BlogCreateEdit;
