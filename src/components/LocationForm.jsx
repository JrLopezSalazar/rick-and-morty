import getRandomNumber from "../utils/getRandomNumber";

const LocationForm = ({ handleSubmit }) => {
  return (
    <>
    

  <section className=" mx-auto md:max-w-3xl justify-center ">
    <form className=" h-24 md:flex py-6 flex justify-center " onSubmit={handleSubmit}>
      <input
        className="flex w-[230px] md:w-[500px]  border-4 border-green-500 justify-center items-center"
        min={1}
        max={126}
        placeholder="Type a location id ..."
        id="inputId"
        type="number"
      />
      <button
        className="flex w-[110px] h-auto bg-green-500 items-center justify-center hover:bg-slate-300"
        type="submit"
      >
        Search
      </button>
    </form>
  </section>
    




      {/* <section className="flex gap-8 sm:flex  max-w-[1200px] mx-auto">

        <form
          className=" border-4 border-green-500/100 flex w-full  sm:h-full"
          onSubmit={handleSubmit}
        >
          <input
            className=" w-[80%] flex text-center"
            min={1}
            max={126}
            placeholder="Type a location id ..."
            id="inputId"
            type="number"
          />
          <button className="text-white bg-green-500 w-[20%] transition duration-700 hover:bg-sky-700 flex justify-center items-center ">
            Search
          </button>
        </form> 

      </section> */}
    </>
  );
};

export default LocationForm;
