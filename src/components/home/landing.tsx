function Home() {
  return (
    <section
      id="home"
      className="bg-contain bg-no-repeat bg-bottom"
      style={{ backgroundImage: "url(/images/background.svg)" }}
    >
      <div className="container mx-auto">
        <h2 className="text-center mt-24 mb-6">
          Get the IT job you deserve
          <br /> with a little help from fellow IT specialits.
        </h2>
        <p className="text-center mb-6">
          Strings IT Recruitment is helping IT/tech professionals discover more
          exciting career opportunities.
          <br />
          Free of charge, of course.
        </p>
        <form action="" className="text-center pb-72">
          <input
            className="w-96 placeholder-gray-500"
            placeholder="Search for job offers..."
          />
          <button className="ml-4 big">Search jobs</button>
        </form>
      </div>
    </section>
  );
}

export default Home;
