const List = ({ selectedData }) => {
  return (
    <>
      {selectedData.map(({ id, name, age, image, email }) => {
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
