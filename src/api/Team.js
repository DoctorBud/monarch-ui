import axios from 'axios';
import yaml from 'js-yaml';

export default async function getTeam() {
  const teamUrl = `/team.yaml`;
  console.log('getTeam');
  const teamResponse = await axios.get(teamUrl);
  console.log('teamResponse', teamResponse);

  let team = null;
  try {
    const teamParsed = await yaml.safeLoad(teamResponse.data, 'utf8');
    const institutions = teamParsed.institutions;
    console.log('teamParsed', teamParsed, institutions);

    institutions.forEach((i) => {
      const people = i.people;
      const peopleNames = people
        .filter(p => !p.alumni)
        .map(p => p.name);
      i.peopleNames = peopleNames;
    });
    team = teamParsed;
  }
  catch (e) {
    console.log('getTeam yaml.safeLoad ERROR', e);
  }

  return team;
}
