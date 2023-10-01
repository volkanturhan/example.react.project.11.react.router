import { useParams,Link } from "react-router-dom";
const ProductDetalilPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Product Details</h1>
      <p1>{params.id}</p1>
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  );
};
export default ProductDetalilPage;
