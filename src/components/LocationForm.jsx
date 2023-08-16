import getRandomNumber from "../utils/getRandomNumber";

const LocationForm = ({ handleSubmit }) => {
  return (
    <>
      <section className=" relative right-[-3%]">
        <form
          className=" w-[719px] h-[60px] border-4 border-green-500/100 flex ml-52  my-12 mt-6 "
          onSubmit={handleSubmit}
        >
          <input
            className=" w-[70%] flex  text-center"
            min={1}
            max={126}
            placeholder="Type a location id ..."
            id="inputId"
            type="number"
          />
          <button className="text-white bg-green-500 w-[30%] transition duration-700 hover:bg-sky-700  ">
            Search
          </button>
        </form>
      </section>
    </>
  );
};

export default LocationForm;
