export const goToMain = (history) => {
  history.push('/');
};

export const goToCard = (history, name) => {
  history.push(`/CardPage/${name}`);
};
