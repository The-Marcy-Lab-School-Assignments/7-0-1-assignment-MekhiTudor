function GifContainer({ arr }) {
  //inputs the array of values received from fetch call
  //console.log(arr);
  return (
    <ul>
      {arr?.map((thing) => (
        <li key={thing.id}>
          <img src={thing.images.fixed_width.url}></img>
        </li>
      ))}
    </ul>
  );
}

export default GifContainer;
