const ProgrammingLanguages = () => {
  return (
    <div
      className="
      col-start-3	col-end-4
      row-start-1	row-end-2
      rounded-[1.5rem]            
      bg-gradient-to-b 
      from-fade-t 
      to-fade-b 
      text-hero-text 
      p-8 md:p-10
      mb-5
      mb:mb-0
      w-[100%]
      "
    >
      <h1 className="text-[1.75rem] md:text-[2rem] font-bold font-mono text-white pb-4">
        Programming Languages
      </h1>
      <ul className="list-disc list-inside text-[1.1rem] md:text-[1.25rem] text-black space-y-1">
        <li>C</li>
        <li>Python</li>
        <li>Java</li>
        <li>Lua</li>
        <li>Scala</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
      </ul>
    </div>
  );
};

export default ProgrammingLanguages;
