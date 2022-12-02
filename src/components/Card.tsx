import React, { useEffect } from 'react';
import { Api } from '../hooks/Api';

interface Props {
  first: any;
  setFirst: React.Dispatch<React.SetStateAction<any>>;
}

const Card = ({ first, setFirst }: Props) => {

  const { apiInfo, llamadaApi } = Api();
 
 let character: string = ")";

  useEffect(() => {
    llamadaApi();
  }, []);

   const onSearchCard = (event: any) => {
    //  console.log({events})
     setFirst(event);
   };

  return (
    <>
      {!apiInfo
        ? "Loading"
        : apiInfo
            .filter((item: any) => {
              let searchTerm = "";
              let x = first;
              searchTerm = x?.toLowerCase() || "";
              const theemail: any = item.email.toLowerCase() || "";
              const theid = item.id.toString();

              return (
                searchTerm &&
                (theid.includes(searchTerm) || theemail.includes(searchTerm)) &&
                (theemail || theid) !== searchTerm
              );
            })
            .map((item: any, index: any) => (
              <div
                onClick={() => onSearchCard(item.email)}
                className="dropdown-row"
                key={index}
              >
                {item.id} {character} &nbsp; {item.email}
              </div>
            ))}
    </>
  );
};

export default Card


