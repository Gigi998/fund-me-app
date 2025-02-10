const connectToProvider = async () => {
  const provider = window.ethereum;

  if (!provider) return;

  if (typeof provider !== undefined) {
    try {
      await provider.request({
        method: "eth_requestAccounts",
      });

      return provider;
    } catch (error) {
      console.log(error);
    }
  }

  return;
};

export { connectToProvider };
