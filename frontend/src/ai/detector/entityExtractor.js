const LOCATIONS = [
  "bangalore",
  "hyderabad",
  "pune",
  "remote",
  "delhi",
];

const ROLES = [
  "java",
  "backend",
  "frontend",
  "react",
  "spring",
  "python",
];

export function extractEntities(message){

    const text=message.toLowerCase();

    const entities={

        role:null,

        location:null,

        salary:null

    };

    LOCATIONS.forEach(location=>{

        if(text.includes(location))
            entities.location=location;

    });

    ROLES.forEach(role=>{

        if(text.includes(role))
            entities.role=role;

    });

    const salary=text.match(/\d+\s?lpa/i);

    if(salary)
        entities.salary=salary[0];

    return entities;

}