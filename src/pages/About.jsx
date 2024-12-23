const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          we love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='max-w-2xl mt-6 leading-8 mx-auto text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint et
        similique molestias repellendus illo distinctio hic maxime placeat quia.
        At, quam dolores architecto sunt laudantium ad! Quibusdam, mollitia cum?
      </p>
    </>
  );
};

export default About;
