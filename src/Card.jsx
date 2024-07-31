function Card({ title, content }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-black">
      <div className="font-bold text-xl mb-2 text-white">{title}</div>
      <p className="text-white text-base">{content}</p>
      <button class="btn mt-5">Click Here</button>
    </div>
  );
}

export default Card;
