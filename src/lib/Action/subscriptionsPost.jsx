const subscriptionsPost = async newSubscriptions => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/subscriptions`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newSubscriptions),
  });
  const res = await req.json();

  return res;
};

export default subscriptionsPost;
