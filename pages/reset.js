import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  if (!query.token) {
    return (
      <di>
        <p>Sorry, you must supply a token!</p>
        <RequestReset />
      </di>
    );
  }
  return (
    <div>
      <p>Reset your password {query?.token}</p>
      <Reset token={query?.token} />
    </div>
  );
}
