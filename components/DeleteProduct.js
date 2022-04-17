import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
  });
  return (
    <button
      disabled={loading}
      type="button"
      onClick={() => {
        if (confirm('Are you sure to delete this product ?')) {
          console.log('Delete!!!');
          deleteProduct().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}
