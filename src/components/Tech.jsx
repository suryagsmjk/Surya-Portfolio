import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <span className=" ml-4 pl-3 opacity-50">{technology.title}</span>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "") 