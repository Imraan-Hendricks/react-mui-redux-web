const handleFetch = async (endpoint) => {
  const res = await fetch(endpoint);

  if (!res.ok) {
    const err = [
      {
        location: 'fetch',
        param: 'general',
        msg: 'Network error',
        value: '',
      },
    ];
    throw err;
  }

  const apiRes = await res.json();

  if (!apiRes.success) {
    throw apiRes.err;
  }

  return apiRes.data;
};

export { handleFetch };
