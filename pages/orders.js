import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import ErrorMessage from '../components/ErrorMessage';
import OrderItemStyles from '../components/styles/OrderItemStyles';
import formatMoney from '../lib/formatMoney';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    allOrders {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

const OrderUI = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
`;

export default function SingleOrderPage({ query }) {
  const { data, error, loading } = useQuery(USER_ORDERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;
  const { allOrders } = data;
  return (
    <OrderUI>
      {allOrders.map((order) => (
        <OrderItemStyles>
          <Link href={`/order/${order.id}`}>
            <a>
              <div className="order-meta">
                <p>5 Items</p>
                <p>
                  {order.items.length} Product
                  {order.items.length === 1 ? '' : 's'}
                </p>
                <p>{formatMoney(order.total)}</p>
              </div>
              <div className="images">
                {order.items.map((item) => (
                  <img
                    key={`image-${item.id}`}
                    src={item?.photo?.image?.publicUrlTransformed}
                    alt={item.name}
                  />
                ))}
              </div>
            </a>
          </Link>
        </OrderItemStyles>
      ))}
    </OrderUI>
  );
}
