import React from "react";

export default () => {
  const [dog, updateDog] = React.useState();
  const [status, updateStatus] = React.useState("");
  const onClickHandler = async () => {
    updateStatus('loading');
    const response =
      window && (await window.fetch("https://dog.ceo/api/breeds/image/random"));
    const data = await response.json();
    if (data && data.message) {
      updateDog(data.message);
      updateStatus("success");
    }
  };
  return (
    <>
      <button onClick={onClickHandler}>Dog me!</button>
      {status === "loading" ? <div>Loading...</div> : null}
      <img src={dog} />
    </>
  );
};
