import { useParams } from 'react-router';

export default function Product() {
  const params = useParams();

  return (
    <div>
      <h1>Product id = {params.id}</h1>
    </div>
  );
}
