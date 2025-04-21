
const ifHave = () => {
  const localStore = localStorage.getItem("id");
  if (localStore) {
    const convertStore = JSON.parse(localStore);
    return convertStore;
  } else {
    return [];
  }

};
const Wish = (id) => {
  const wish = ifHave();
  if (wish.includes(id)) {
return "already"
  } else {
    wish.push(id);
    const setData = JSON.stringify(wish);
    localStorage.setItem("id", setData);
    return "completed"
  }
};

export { Wish ,ifHave};
