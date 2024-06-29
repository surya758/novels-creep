export const getUser = async () => {
  try {
    const res = await fetch('/api/kindeSession');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
