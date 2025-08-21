import Button from "../button";

const Header = () => {
  return (
    <div className="md:mt-29 mt-18 mb-12">
      <div className="mb-16">
        <h1 className="md:text-5xl text-4xl font-bold">
          Hey I'm <span className="text-[rgba(41,49,157,0.742)]">Piyush !</span>
        </h1>
        <h2 className="text-3xl">
          Discover new blogs of technology and trends
        </h2>
      </div>
      <div className="flex md:flex-row flex-col gap-10">
        <div className="md:w-1/2 w-full">
          <img
            className="w-full md:h-[40vh] h-[30vh] sm:h-[45vh]  rounded object-cover "
            src="temp.jpg"
            alt="Temp Img"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Lorem, ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            eligendi iure ullam obcaecati quo perferendis nostrum ratione, atque
            assumenda libero excepturi! Repellendus, natus esse minus sed
            reiciendis ut ab perferendis. Soluta fuga repellat quasi
            reprehenderit quibusdam non quae sapiente dolor, ullam quia corrupti
            id ut, iste, veniam delectus laborum maxime.
          </p>
          <div>
           <Button value="Read More" to="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
