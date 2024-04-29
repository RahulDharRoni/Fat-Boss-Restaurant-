import one from "../../../../assets/street.jpg";
import two from "../../../../assets/2.jpg";
import three from "../../../../assets/3c.jpg";
import four from "../../../../assets/new.jpg";

const Cards = () => {
  return (
    <div className="flex justify-center gap-6 xl:mx-52 my-10">
      <div className="card w-96 glass">
        <figure>
          <img src={one} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      <div className="card w-96 glass">
        <figure>
          <img src={two} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      <div className="card w-96 glass">
        <figure>
          <img src={three} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      <div className="card w-96 glass">
        <figure>
          <img src={four} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
