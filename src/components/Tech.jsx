import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5">
      {technologies.map((technology) => (
        <div className="w-32 h-22" key={technology.name}>
          <BallCanvas icon={technology.icon}></BallCanvas>
        </div>  
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '');