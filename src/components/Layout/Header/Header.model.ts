import { To } from "react-router-dom";

interface linkType{
  Id: number,
  Link: To,
  Name: string,
};

export const linksArray: linkType[] =[
  {
    Id: 0,
    Link: '/',
    Name: 'Main'
  },
  {
    Id: 1,
    Link: '/Artists',
    Name: 'Artists'
  },
  {
    Id: 2,
    Link: '/Events',
    Name: 'Events'
  }
]

export default linksArray