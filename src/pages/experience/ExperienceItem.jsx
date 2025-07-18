import { StyledExperienceItem } from "./ExperienceItem.styled";

export const ExperienceItem = (props) => {
  const { data } = props;

  return (
    <StyledExperienceItem className="experience-item" color={data.color}>
      <div className="header">
        <div className="image">
          <div className="wrapper">
            <img src={data.logo} alt="logo" />
          </div>
        </div>
        <div className="text">
          <h2>{data.name}</h2>
          <h3 className="position">
            <span dangerouslySetInnerHTML={{ __html: data.title }} />
          </h3>
        </div>
      </div>
      <div className="date">
        {data.joined} - {data.end}
      </div>
      <div className="bio">
        <p dangerouslySetInnerHTML={{ __html: data.bio }} />
      </div>
    </StyledExperienceItem>
  );
};
